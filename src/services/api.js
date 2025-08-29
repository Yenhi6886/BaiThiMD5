import axios from "axios";

const API_URL = "http://localhost:3001/songs";

export const getSongs = () => axios.get(API_URL);
export const addSong = (song) => axios.post(API_URL, song);
export const updateSong = (id, song) => axios.put(`${API_URL}/${id}`, song);
