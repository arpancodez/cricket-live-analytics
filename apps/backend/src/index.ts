import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: process.env.FRONTEND_URL || 'http://localhost:3000' }
});

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let matches: any[] = [{
  _id: '1',
  team1: 'India',
  team2: 'Australia',
  status: 'live',
  score: { team1: 156, team2: 120 },
  overs: '15.3',
  wickets: { team1: 3, team2: 5 }
}];

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

app.get('/api/matches', (req, res) => {
  res.json(matches);
});

app.get('/api/matches/:id', (req, res) => {
  const match = matches.find(m => m._id === req.params.id);
  res.json(match || { error: 'Not found' });
});

io.on('connection', (socket) => {
  console.log('Connected:', socket.id);
  socket.on('join-match', (id) => socket.join(`match-${id}`));
  socket.on('score-update', (data) => {
    io.to(`match-${data.id}`).emit('score:update', data);
  });
});

httpServer.listen(PORT, () => {
  console.log(`🚀 Server on http://localhost:${PORT}`);
});

export { io, app };
