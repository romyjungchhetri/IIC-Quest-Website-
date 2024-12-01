import { db, storage } from '../config/firebase';
import { collection, doc, setDoc, getDoc, updateDoc, query, where, getDocs, arrayUnion } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const TEAMS_COLLECTION = 'teams';

export const teamService = {
  async createTeam(teamData) {
    try {
      const teamRef = doc(collection(db, TEAMS_COLLECTION));
      await setDoc(teamRef, {
        ...teamData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      return teamRef.id;
    } catch (error) {
      console.error('Error creating team:', error);
      throw error;
    }
  },

  async updateTeam(teamId, teamData) {
    try {
      const teamRef = doc(db, TEAMS_COLLECTION, teamId);
      await updateDoc(teamRef, {
        ...teamData,
        updatedAt: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error updating team:', error);
      throw error;
    }
  },

  async getTeam(teamId) {
    try {
      const teamRef = doc(db, TEAMS_COLLECTION, teamId);
      const teamDoc = await getDoc(teamRef);
      if (teamDoc.exists()) {
        return { id: teamDoc.id, ...teamDoc.data() };
      }
      return null;
    } catch (error) {
      console.error('Error getting team:', error);
      throw error;
    }
  },

  async getTeamByMemberEmail(email) {
    try {
      const teamsRef = collection(db, TEAMS_COLLECTION);
      const q = query(teamsRef, where('members', 'array-contains', { email }));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const teamDoc = querySnapshot.docs[0];
        return { id: teamDoc.id, ...teamDoc.data() };
      }
      return null;
    } catch (error) {
      console.error('Error getting team by member email:', error);
      throw error;
    }
  },

  async uploadTeamFile(teamId, file) {
    try {
      const fileRef = ref(storage, `teams/${teamId}/${file.name}`);
      const snapshot = await uploadBytes(fileRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      // Update team document with file reference
      const teamRef = doc(db, TEAMS_COLLECTION, teamId);
      await updateDoc(teamRef, {
        'projectDetails.files': arrayUnion({
          name: file.name,
          url: downloadURL,
          uploadedAt: new Date().toISOString()
        })
      });

      return downloadURL;
    } catch (error) {
      console.error('Error uploading team file:', error);
      throw error;
    }
  }
};
