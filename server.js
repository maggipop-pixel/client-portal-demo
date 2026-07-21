const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const clients = [
  { name: 'Ana García',      company: 'Innovatech S.L.',   email: 'ana.garcia@innovatech.es',    status: 'Active' },
  { name: 'Carlos Mendoza',  company: 'DataBridge Corp.',  email: 'c.mendoza@databridge.com',    status: 'Active' },
  { name: 'Laura Jiménez',   company: 'NexGen Solutions',  email: 'laura.j@nexgen.io',           status: 'Inactive' },
  { name: 'Marcos Torres',   company: 'CloudPeak Ltd.',    email: 'm.torres@cloudpeak.co.uk',    status: 'Prospect' },
  { name: 'Sofía Ramírez',   company: 'PixelForge Studio', email: 'sofia@pixelforge.design',     status: 'Active' },
];

const pipeline = [
  { clientName: 'Innovatech S.L.',   dealStage: 'Proposal Sent',   value: 28000,  closeDate: '2026-08-15' },
  { clientName: 'DataBridge Corp.',  dealStage: 'Negotiation',      value: 75000,  closeDate: '2026-07-31' },
  { clientName: 'NexGen Solutions',  dealStage: 'Qualified Lead',   value: 12500,  closeDate: '2026-09-10' },
  { clientName: 'CloudPeak Ltd.',    dealStage: 'Discovery Call',   value: 45000,  closeDate: '2026-10-01' },
  { clientName: 'PixelForge Studio', dealStage: 'Closed Won',       value: 18000,  closeDate: '2026-07-05' },
  { clientName: 'RetailMax Group',   dealStage: 'Proposal Sent',    value: 92000,  closeDate: '2026-08-28' },
];

app.get('/', (req, res) => res.redirect('/login'));

app.get('/login', (req, res) => {
  res.render('login', { error: null });
});

app.post('/login', (req, res) => {
  // No real auth yet — any submission proceeds
  res.redirect('/clients');
});

app.get('/clients', (req, res) => {
  res.render('clients', { clients });
});

app.get('/pipeline', (req, res) => {
  res.render('pipeline', { pipeline });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
