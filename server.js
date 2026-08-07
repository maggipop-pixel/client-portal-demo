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

const financeSummary = {
  held: 62000,
  collected: 143500,
  expected: 109000,
  dueToVendors: 43800,
  overdue: 19400,
};

const financeProjects = [
  { name: 'Innovatech Redesign',       collected: 18000, expected: 10000, dueToVendors: 4500,  overdue: 0 },
  { name: 'DataBridge Integration',    collected: 45000, expected: 30000, dueToVendors: 12000, overdue: 7500 },
  { name: 'NexGen Cloud Migration',    collected: 6500,  expected: 6000,  dueToVendors: 2000,  overdue: 0 },
  { name: 'CloudPeak Infra Audit',     collected: 22000, expected: 23000, dueToVendors: 9800,  overdue: 4200 },
  { name: 'RetailMax E-commerce',      collected: 52000, expected: 40000, dueToVendors: 15500, overdue: 7700 },
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

app.get('/finance', (req, res) => {
  res.render('finance', { summary: financeSummary, projects: financeProjects });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
