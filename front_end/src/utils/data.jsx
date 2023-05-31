export const route = [{

    url:'/',
    handleLinkClick: 'dashboard',
    handleButtonClick: 'Dashboard',
    title:'Dashboard'
},
{

    url:'/ccp',
    handleLinkClick: 'ccp',
    handleButtonClick: 'CCP & prototype',
    title:'CCP & prototype'
},
{

    url:'/controle',
    handleLinkClick: 'controle',
    handleButtonClick: 'Controle finale',
    title:'Controle finale'
},
{

    url:'/prototype',
    handleLinkClick: 'prototype',
    handleButtonClick: 'Prototype',
    title:'Prototype'
},
{

    url:'/controle_operateurs',
    handleLinkClick: 'controle_operateurs',
    handleButtonClick: 'Controle opérateurs',
    title:'Controle opérateurs'
},
{

    url:'/controle_aq',
    handleLinkClick: 'controle_aq',
    handleButtonClick: 'Controle des AQ',
    title:'Controle des AQ'
},
{

    url:'/matiere_premiere',
    handleLinkClick: 'matiere_premiere',
    handleButtonClick: 'Matiére 1ere',
    title:'Matiére 1ere'
},
{

    url:'/correction_action',
    handleLinkClick: 'correction_action',
    handleButtonClick: 'Action de correction',
    title:'Action de correction'
},
{

    url:'/historique',
    handleLinkClick: 'historique',
    handleButtonClick: 'Historiques et indicateurs',
    title:'Historiques et indicateurs'
},
{

    url:'/parametre',
    handleLinkClick: 'parametre',
    handleButtonClick: 'Parametre',
    title:'Parametre'
},
]

export const data = [{
    id: 0,
    section: 'Controle à la chaine',
    reference: 'A200',
    conforme: '4.15',
    Nconforme: '2.15'
  },
  {
    id: 1,
    section: 'Controle à la chaine',
    reference: 'A300',
    conforme: '4.15',
    Nconforme: '2.15'
  },
  {
    id: 2,
    section: 'Controle à la chaine',
    reference: 'A200',
    conforme: '4.15',
    Nconforme: '2.15'
  },
  {
    id: 3,
    section: 'Controle à la chaine',
    reference: 'A200',
    conforme: '4.15',
    Nconforme: '2.15'
  },
  {
    id: 4,
    section: 'Controle à la chaine',
    reference: 'A200',
    conforme: '4.15',
    Nconforme: '2.15'
  },
  {
    id: 5,
    section: 'Controle à la chaine',
    reference: 'A200',
    conforme: '4.15',
    Nconforme: '2.15'
  },
  ]
export const PhaseColumns = [
    { field: 'id', headerName: 'Contrôle', flex: 0.3,align: "center",headerAlign: 'center'  },
    {
      field: 'conformité',
      headerName: '% conformité',
      flex: 0.3,
      editable: true,
      align: "center",headerAlign: 'center' ,
    },
    {
      field: 'nonconformité',
      headerName: '% non-conformité',
      flex: 0.4,
      editable: true,
      align: "center",headerAlign: 'center' 
    },
  ];

export const PhaseRows = [
  { id: 1,  conformité: 'Jon' ,nonconformité: 'Snow' },
  { id: 2, conformité: 'Cersei',nonconformité: 'Snow' },
  { id: 3,  conformité: 'Jaime',nonconformité: 'Snow' },
  { id: 4,  conformité: 'Arya',nonconformité: 'Snow' },
  { id: 5,  conformité: 'Daenerys',nonconformité: 'Snow' },
  { id: 6,  conformité: null,nonconformité: 'Snow'},
  { id: 7,  conformité: 'Jon' ,nonconformité: 'Snow' },
  { id: 8, conformité: 'Cersei',nonconformité: 'Snow' },
  { id: 9,  conformité: 'Jaime',nonconformité: 'Snow' },
  { id: 4,  conformité: 'Arya',nonconformité: 'Snow' },
  { id: 5,  conformité: 'Daenerys',nonconformité: 'Snow' },
  { id: 6,  conformité: null,nonconformité: 'Snow'},
  { id: 1,  conformité: 'Jon' ,nonconformité: 'Snow' },
  { id: 2, conformité: 'Cersei',nonconformité: 'Snow' },
  { id: 3,  conformité: 'Jaime',nonconformité: 'Snow' },
  
]

export const TypeColumns = [
  { field: 'id', headerName: 'Type', flex:0.3, align: "center",headerAlign: 'center'},
  {
    field: 'percent',
    headerName: '%',
    flex: 0.7,
    editable: true,
    align: 'center',headerAlign: 'center',
  },

];
export const TypeRows = [
  { id: 1,  percent: 'Jon'  },
  { id: 2, percent: 'Cersei' },
  { id: 1,  percent: 'Jon'  },
  { id: 2, percent: 'Cersei' },{ id: 1,  percent: 'Jon'  },
  { id: 2, percent: 'Cersei' },{ id: 1,  percent: 'Jon'  },
  { id: 2, percent: 'Cersei' },
  { id: 1,  percent: 'Jon'  },
  { id: 2, percent: 'Cersei' },

];

export const StatiqueColumns = [
  { field: 'id', headerName: 'Références', flex:0.2, align: "center",headerAlign: 'center'},
  {field: 'firstName', headerName: 'Famille',flex: 0.2,editable: true,align: "center",headerAlign: 'center'},
  {field: 'lastName', headerName: 'Taux de conformité',flex: 0.3, editable: true,align: "center",headerAlign: 'center'},
  {field: 'age',headerName: 'Taux de non-conformité',type: 'number',flex: 0.3,editable: true,align: "center",headerAlign: 'center'},
];

export const StatiqueRows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
 
];

export const PhaseColumnsCcp = [
  { field: 'id', headerName: 'Phase', flex: 0.2,align: "center",headerAlign: 'center'  },
  {
    field: 'conformité',
    headerName: '% conformité',
    flex: 0.4,
    editable: true,
    align: "center",headerAlign: 'center' ,
  },
  {
    field: 'nonconformité',
    headerName: '% non-conformité',
    flex: 0.4,
    editable: true,
    align: "center",headerAlign: 'center' 
  },
];

export const OperateurColumns = [
  { field: 'id', headerName: 'Code', flex:0.2, align: "center",headerAlign: 'center' },
  {field: 'firstName', headerName: 'Nom',flex: 0.2,editable: true,align: "center",headerAlign: 'center'},
  {field: 'lastName', headerName: 'Taux de conformité',flex: 0.2, editable: true,align: "center",headerAlign: 'center'},
  {field: 'age',headerName: 'Taux de non-conformité',type: 'number',flex: 0.4,editable: true,align: "center",headerAlign: 'center'},
];

export const OperateurRows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
 
];

export const OpColumns = [
  { field: 'id', headerName: 'Références', flex:0.2, align: "center",headerAlign: 'center' },
  {field: 'firstName', headerName: 'Famille',flex: 0.2,editable: true,align: "center",headerAlign: 'center'},
  {field: 'lastName', headerName: '% conformité',flex: 0.3, editable: true,align: "center",headerAlign: 'center'},
  {field: 'age',headerName: '% non-conformité',type: 'number',flex: 0.3,editable: true,align: "center",headerAlign: 'center'},
];

export const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

export const matiereColumns = [
  { field: 'id', headerName: 'Références', flex:0.2, align: "center",headerAlign: 'center' },
  {field: 'firstName', headerName: 'Type',flex: 0.2,editable: true,align: "center",headerAlign: 'center'},
  {field: 'lastName', headerName: 'Fournisseur',flex: 0.3, editable: true,align: "center",headerAlign: 'center'},
  {field: 'age',headerName: 'Etat',type: 'number',flex: 0.3,editable: true,align: "center",headerAlign: 'center'},

];

export const matiereRows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
];