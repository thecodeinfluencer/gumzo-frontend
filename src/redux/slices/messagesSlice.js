import { createSlice } from '@reduxjs/toolkit';
import emoji from '../../assets/emoji.png';
import shield from '../../assets/shield.png';
import frame from '../../assets/frame.png';
import smileys from '../../assets/smileys.png';

const initialState = {
  gumzo: [
    {
      owner: 'Human',
      message: 'Hello',
    },
    {
      owner: 'AI',
      message: 'Hi there! Nice to meet you. How can I help you today?',
    },
    {
      owner: 'Human',
      message: 'What can you do?',
    },
    {
      owner: 'AI',
      message: 'I can help you with your queries. Kind of like Chat-GPT',
    },
  ],
  rafiki: [
    {
      owner: 'Human',
      message: 'Hi, how are you? 😃',
    },
    {
      owner: 'AI',
      message: 'Im fine. 🤗 How about you?',
    },
    {
      owner: 'Human',
      message: 'I am okay. What have you been up to?',
    },
    {
      owner: 'AI',
      message: 'Watching old movies. You?',
    },
  ],
  kejeli: [
    {
      owner: 'Human',
      message: 'What is the meaning of life?',
    },
    {
      owner: 'AI',
      message: "I'm not sure. I'll ask my friend Alexa.",
    },
    {
      owner: 'Human',
      message: 'What does HTML stand for?',
    },
    {
      owner: 'AI',
      message:
        'Was Google too busy? Hypertext Markup Language. The T is for try to ask better questions in the future',
    },
  ],
  jibu: [
    {
      owner: 'Human',
      message: 'Who was president of Kenya in 1965?',
    },
    {
      owner: 'AI',
      message: 'Jomo Kenyatta was the president of Kenya in 1965',
    },
    {
      owner: 'Human',
      message: 'who came after him?',
    },
    {
      owner: 'AI',
      message:
        'Mzee Jomo Kenyatta was succeeded as president by Daniel arap Moi in 1978',
    },
  ],
  bots: [
    {
      name: 'Gumzo',
      id: 'gumzo',
      avatar: smileys,
      desc: 'Simulates an open ended conversation with AI ',
      color: '#f5f5f5',
      active: true,
    },
    {
      name: 'Rafiki',
      id: 'rafiki',
      avatar: frame,
      desc: 'Emulates text messaging conversation',
      color: '#f5f5f5',
      active: false,
    },
    {
      name: 'Kejeli',
      id: 'kejeli',
      avatar: emoji,
      desc: 'A factual chatbot that is also sarcastic.',
      color: '#f5f5f5',
      active: false,
    },
    {
      name: 'Jibu',
      id: 'jibu',
      avatar: shield,
      desc: 'Answers questions based on existing knowledge.',
      color: '#f5f5f5',
      active: false,
    },
  ],
  activeChat: 'gumzo',
  loading: false,
  optionsOpen: false,
};

const messagesSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addMessage(state, action) {
      const { bot, owner, message } = action.payload;
      state[bot].push({ owner, message });
    },
    setActiveChat(state, action) {
      state.activeChat = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setOptionsOpen(state, action) {
      state.optionsOpen = action.payload;
    },
  },
});

export const { addMessage, setActiveChat, setLoading, setOptionsOpen } =
  messagesSlice.actions;
export default messagesSlice.reducer;
