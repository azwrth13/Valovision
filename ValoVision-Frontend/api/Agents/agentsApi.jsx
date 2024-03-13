import axios from 'axios';
import getBackendURL from '@/utils/urls';



const agents_api_url = `${getBackendURL()}/api/agents`;

export const fetchAgents = async () => {
    try {
        const response = await axios.get(`${agents_api_url}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching agents:', error);
        throw error;
    }
};

export const createAgent = async (agentData) => {
    try {
        const response = await axios.post(`${agents_api_url}`, agentData);
        return response.data;
    } catch (error) {
        console.error('Error creating agent:', error);
        throw error;
    }
};

export const updateAgent = async (id, agentData) => {
    try {
        const response = await axios.put(`${agents_api_url}/${id}`, agentData);
        return response.data;
    } catch (error) {
        console.error(`Error updating agent with ID ${id}:`, error);
        throw error;
    }
};

export const deleteAgent = async (id) => {
    try {
        const response = await axios.delete(`${agents_api_url}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting agent with ID ${id}:`, error);
        throw error;
    }
};
