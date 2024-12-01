import { useState } from 'react'
import { Upload, FileText, Users, Calendar } from 'lucide-react'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const teamInfo = {
    name: 'Team Innovators',
    members: [
      {
        name: 'John Doe',
        role: 'Team Leader',
        email: 'john@example.com',
      },
      {
        name: 'Jane Smith',
        role: 'Developer',
        email: 'jane@example.com',
      },
      {
        name: 'Mike Johnson',
        role: 'Developer',
        email: 'mike@example.com',
      },
    ],
  }

  const submissions = [
    {
      type: 'Project Proposal',
      status: 'Submitted',
      date: '2024-03-15',
    },
    {
      type: 'Mid-Event Check-in',
      status: 'Pending',
      date: '2024-03-15',
    },
    {
      type: 'Final Submission',
      status: 'Not Started',
      date: '2024-03-16',
    },
  ]

  const schedule = [
    {
      time: '10:00 AM',
      event: 'Team Presentation',
      venue: 'Hall A',
      date: '2024-03-16',
    },
    {
      time: '02:00 PM',
      event: 'Mentorship Session',
      venue: 'Room 101',
      date: '2024-03-15',
    },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="grid gap-6 md:grid-cols-2">
            {/* Team Information */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Team Information</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Team Name</h4>
                  <p className="text-gray-600">{teamInfo.name}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Team Members</h4>
                  <div className="space-y-2">
                    {teamInfo.members.map((member, index) => (
                      <div key={index} className="flex flex-col">
                        <span className="font-medium">{member.name}</span>
                        <span className="text-sm text-gray-600">
                          {member.role} - {member.email}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Your Schedule</h3>
              </div>
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 border-l-2 border-primary pl-4"
                  >
                    <div>
                      <p className="font-semibold">{item.event}</p>
                      <p className="text-sm text-gray-600">
                        {item.date} at {item.time}
                      </p>
                      <p className="text-sm text-gray-600">Venue: {item.venue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'submissions':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Submissions</h3>
            </div>
            <div className="space-y-6">
              {submissions.map((submission, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div>
                    <h4 className="font-semibold">{submission.type}</h4>
                    <p className="text-sm text-gray-600">Due: {submission.date}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      submission.status === 'Submitted'
                        ? 'bg-green-100 text-green-800'
                        : submission.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {submission.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Upload Section */}
            <div className="mt-8">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">
                  Drag and drop your files here, or click to select files
                </p>
                <button className="btn-primary mt-2">Upload Files</button>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-accent py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h1 className="text-3xl font-bold">Team Dashboard</h1>
          <p className="text-gray-600">
            Welcome back, {teamInfo.name}! Track your progress and manage your submissions.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="flex border-b">
            {['overview', 'submissions'].map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-4 px-6 text-center font-semibold capitalize ${
                  activeTab === tab
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-primary'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  )
}

export default Dashboard
