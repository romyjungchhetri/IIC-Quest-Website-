import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Mail, Phone, School, Plus, X, Edit2, Save, UserPlus } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import FileUpload from '../shared/FileUpload';
import { teamService } from '../../services/teamService';
import toast from 'react-hot-toast';

export default function TeamManagement() {
  const { currentUser } = useAuth();
  const [team, setTeam] = useState({
    name: '',
    members: [
      { name: '', email: '', phone: '', college: '', role: 'Team Leader' },
      { name: '', email: '', phone: '', college: '', role: 'Member' },
    ],
    projectDetails: {
      title: '',
      description: '',
      techStack: '',
      files: []
    }
  });
  const [editMode, setEditMode] = useState(false);
  const [showAddMember, setShowAddMember] = useState(false);

  const handleInputChange = (e, index = null) => {
    const { name, value } = e.target;
    if (index !== null) {
      const newMembers = [...team.members];
      newMembers[index] = { ...newMembers[index], [name]: value };
      setTeam({ ...team, members: newMembers });
    } else if (name.startsWith('project.')) {
      const projectField = name.split('.')[1];
      setTeam({
        ...team,
        projectDetails: { ...team.projectDetails, [projectField]: value }
      });
    } else {
      setTeam({ ...team, [name]: value });
    }
  };

  const handleAddMember = () => {
    if (team.members.length < 4) {
      setTeam({
        ...team,
        members: [...team.members, { name: '', email: '', phone: '', college: '', role: 'Member' }]
      });
    }
  };

  const handleRemoveMember = (index) => {
    if (team.members.length > 2) {
      const newMembers = team.members.filter((_, i) => i !== index);
      setTeam({ ...team, members: newMembers });
    }
  };

  const handleFileSelect = async (files) => {
    if (!team.id) {
      toast.error('Please save team details before uploading files');
      return;
    }

    const loadingToast = toast.loading('Uploading files...');
    try {
      const uploadPromises = files.map(file => teamService.uploadTeamFile(team.id, file));
      await Promise.all(uploadPromises);
      
      // Refresh team data to get updated file list
      const updatedTeam = await teamService.getTeam(team.id);
      setTeam(updatedTeam);
      
      toast.success('Files uploaded successfully', { id: loadingToast });
    } catch (error) {
      console.error('Error uploading files:', error);
      toast.error('Failed to upload files. Please try again.', { id: loadingToast });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (team.id) {
        await teamService.updateTeam(team.id, team);
        toast.success('Team updated successfully');
      } else {
        const teamId = await teamService.createTeam(team);
        setTeam(prev => ({ ...prev, id: teamId }));
        toast.success('Team created successfully');
      }
      setEditMode(false);
    } catch (error) {
      console.error('Error saving team:', error);
      toast.error('Failed to save team. Please try again.');
    }
  };

  useEffect(() => {
    const loadTeam = async () => {
      const loadingToast = toast.loading('Loading team data...');
      try {
        const userTeam = await teamService.getTeamByMemberEmail(currentUser.email);
        if (userTeam) {
          setTeam(userTeam);
          toast.success('Team data loaded', { id: loadingToast });
        } else {
          toast.success('Create your team', { id: loadingToast });
        }
      } catch (error) {
        console.error('Error loading team:', error);
        toast.error('Failed to load team data', { id: loadingToast });
      }
    };

    if (currentUser?.email) {
      loadTeam();
    }
  }, [currentUser]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Team Management</h2>
          <button
            onClick={() => setEditMode(!editMode)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            {editMode ? (
              <>
                <Save className="w-4 h-4" />
                Save Changes
              </>
            ) : (
              <>
                <Edit2 className="w-4 h-4" />
                Edit Team
              </>
            )}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Team Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Team Name
            </label>
            <input
              type="text"
              name="name"
              value={team.name}
              onChange={(e) => handleInputChange(e)}
              disabled={!editMode}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
              placeholder="Enter team name"
            />
          </div>

          {/* Team Members */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Team Members
              </label>
              {editMode && team.members.length < 4 && (
                <button
                  type="button"
                  onClick={handleAddMember}
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary-600 dark:text-primary-400"
                >
                  <UserPlus className="w-4 h-4" />
                  Add Member
                </button>
              )}
            </div>

            <div className="space-y-4">
              {team.members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="relative p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  {editMode && index > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveMember(index)}
                      className="absolute top-2 right-2 text-gray-400 hover:text-red-500 dark:text-gray-500"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={member.name}
                        onChange={(e) => handleInputChange(e, index)}
                        disabled={!editMode}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={member.email}
                        onChange={(e) => handleInputChange(e, index)}
                        disabled={!editMode}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={member.phone}
                        onChange={(e) => handleInputChange(e, index)}
                        disabled={!editMode}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        College
                      </label>
                      <input
                        type="text"
                        name="college"
                        value={member.college}
                        onChange={(e) => handleInputChange(e, index)}
                        disabled={!editMode}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Project Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  name="project.title"
                  value={team.projectDetails.title}
                  onChange={handleInputChange}
                  disabled={!editMode}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Project Description
                </label>
                <textarea
                  name="project.description"
                  value={team.projectDetails.description}
                  onChange={handleInputChange}
                  disabled={!editMode}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Tech Stack
                </label>
                <input
                  type="text"
                  name="project.techStack"
                  value={team.projectDetails.techStack}
                  onChange={handleInputChange}
                  disabled={!editMode}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                  placeholder="e.g., React, Node.js, MongoDB"
                />
              </div>
              {editMode && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Files
                  </label>
                  <FileUpload
                    onFileSelect={handleFileSelect}
                    maxFiles={3}
                    acceptedTypes={{
                      'application/pdf': ['.pdf'],
                      'application/msword': ['.doc'],
                      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {editMode && (
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
