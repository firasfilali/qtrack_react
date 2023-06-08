import '../assets/css/customColumns.css'

const cellClass = () => {
  return {
    backgroundColor: '#ffaaaa',
  }
}

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
  { id: 10,  conformité: 'Arya',nonconformité: 'Snow' },
  { id: 11,  conformité: 'Daenerys',nonconformité: 'Snow' },
  { id: 12,  conformité: null,nonconformité: 'Snow'},
  { id: 13,  conformité: 'Jon' ,nonconformité: 'Snow' },
  { id: 14, conformité: 'Cersei',nonconformité: 'Snow' },
  { id: 15,  conformité: 'Jaime',nonconformité: 'Snow' },
  
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
  { id: 16,  percent: 'Jon'  },
  { id: 17, percent: 'Cersei' },
  { id: 18,  percent: 'Jon'  },
  { id: 19, percent: 'Cersei' },{ id: 1,  percent: 'Jon'  },
  { id: 20, percent: 'Cersei' },{ id: 1,  percent: 'Jon'  },
  { id: 21, percent: 'Cersei' },
  { id: 22,  percent: 'Jon'  },
  { id: 23, percent: 'Cersei' },

];

export const StatiqueColumns = [
  { field: 'id', headerName: 'Références', flex:0.2, align: "center",headerAlign: 'center'},
  {field: 'firstName', headerName: 'Famille',flex: 0.2,editable: true,align: "center",headerAlign: 'center'},
  {field: 'lastName', headerName: 'Taux de conformité',flex: 0.3, editable: true,align: "center",headerAlign: 'center'},
  {field: 'age',headerName: 'Taux de non-conformité',type: 'number',flex: 0.3,editable: true,align: "center",headerAlign: 'center'},
];

export const StatiqueRows = [
  { id: 24, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 25, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 26, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 27, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 28, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 29, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 30, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 31, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 32, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 33, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 34, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 35, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
 
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
  { id: 36, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 37, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 38, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 39, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 40, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 41, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 42, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 43, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 44, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 45, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
 
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
  { field: 'id', headerName: 'Références', flex:0.2, align: "center",headerAlign: 'center',
  renderCell: (cellValues) => {
    return (
      <div
      style={{
        color: "blue",
        fontSize: 18,
      }}
      >
        {cellValues.value}
      </div>
    )
  }
  },
  {field: 'firstName', headerName: 'Type',flex: 0.2,editable: true,align: "center",headerAlign: 'center',},
  {field: 'lastName', headerName: 'Fournisseur',flex: 0.3, editable: true,align: "center",headerAlign: 'center'},
  {field: 'age',headerName: 'Etat',type: 'number',flex: 0.3,editable: true,align: "center",headerAlign: 'center'},

];

export const matiereRows = [
  { id: 46, lastName: 'Snow', firstName: 'Jon', age: 35, cellClass: cellClass },
  { id: 47, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 48, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 49, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 50, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 51, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 52, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 53, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 54, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 55, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
];
