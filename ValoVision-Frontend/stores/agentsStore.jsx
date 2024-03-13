import { create } from 'zustand';
import { fetchAgents, createAgent, updateAgent, deleteAgent } from '@/api/Agents/agentsApi';

const useAgentsStore = create((set) => ({
    agents: [],
    loading: false,
    error: null,
    fetchAgents: async () => {
        set({ loading: true});
        try {
            const agents = await fetchAgents();
            set({ agents, loading: false});
        } catch (error) {
            set({error: error.message, loading: false});
        }
    },
    addAgent: async (agentData) => {
        try {
            const newAgent = await createAgent(agentData);
            set((state) => ({ agents: [...state.agents, newAgent]}));
        } catch (error) {
            set({ error: error.message, loading: false});
        }
    },
    updateAgent: async (id, agentData) => {
        try {
            await updateAgent(id, agentData);
            set((state) => ({
                agents: state.agents.map(
                    (agent) => (agent.id === id ? { ...agent, ...agentData } : agent)),
            }));
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    deleteAgent: async (id) => {
        try {
            await deleteAgent(id);
            set((state) => ({
                agents: state.agents.filter((agent) => agent.id !== id),
            }));
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

}));

export default useAgentsStore;