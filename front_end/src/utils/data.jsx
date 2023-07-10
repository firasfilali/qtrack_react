import "../assets/css/customColumns.css";

export const data1 = [
  { id: 0, value: 10, label: 'Non conformité',  color:"#F90219" },
  { id: 1, value: 15, label: 'Conformité',color: "#2DCE98" },
];
export const route = [
  {
    url: "/",
    handleLinkClick: "dashboard",
    handleButtonClick: "Dashboard",
    title: "Dashboard",
  },
  {
    url: "/ccp",
    handleLinkClick: "ccp",
    handleButtonClick: "CCP & prototype",
    title: "CCP & prototype",
  },
  {
    url: "/controle",
    handleLinkClick: "controle",
    handleButtonClick: "Controle finale",
    title: "Controle finale",
  },
  {
    url: "/controle_operateurs",
    handleLinkClick: "controle_operateurs",
    handleButtonClick: "Controle opérateurs",
    title: "Controle opérateurs",
  },
  {
    url: "/matiere_premiere",
    handleLinkClick: "matiere_premiere",
    handleButtonClick: "Matière 1ere",
    title: "Matière 1ere",
  },
  {
    url: "/correction_action",
    handleLinkClick: "correction_action",
    handleButtonClick: "Action Correctives & Préventives",
    title: "Action Correctives",
  },
  {
    url: "/historique",
    handleLinkClick: "historique",
    handleButtonClick: "Historiques et indicateurs",
    title: "Historiques et indicateurs",
  },
  {
    url: "/matiere_1ere&fournisseur",
    handleLinkClick: "matiere_1ere&fournisseur",
    handleButtonClick: "Matière 1ere & Fournisseur",
    title: "Matière 1ere & Fournisseur",
  },
  {
    url: "/parametre",
    handleLinkClick: "parametre",
    handleButtonClick: "Parametre",
    title: "Parametre",
  },
];

export const data = [
  {
    id: 0,
    section: "Contrôle à la chaine",
    reference: "A200",
    conforme: "4.15",
    Nconforme: "2.15",
  },
  {
    id: 1,
    section: "Contrôle finale",
    reference: "A300",
    conforme: "4.15",
    Nconforme: "2.15",
  },
  {
    id: 2,
    section: "Prototype",
    reference: "A200",
    conforme: "4.15",
    Nconforme: "2.15",
  },
  {
    id: 3,
    section: "Contrôle opérateur",
    reference: "A200",
    conforme: "4.15",
    Nconforme: "2.15",
  },
  {
    id: 4,
    section: "Contrôle AQ",
    reference: "A200",
    conforme: "4.15",
    Nconforme: "2.15",
  },
  {
    id: 5,
    section: "Alerte",
    reference: "A200",
    conforme: "4.15",
    Nconforme: "2.15",
  },
];
export const PhaseColumns = [
  {
    field: "id",
    headerName: "Contrôle",
    flex: 0.3,
    align: "center",
    headerAlign: "center",
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
  {
    field: "conformité",
    headerName: "% conformité",
    flex: 0.3,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "nonconformité",
    headerName: "% non-conformité",
    flex: 0.4,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
];

export const PhaseRows = [
  { id: 1, conformité: "Jon", nonconformité: "Snow" },
  { id: 2, conformité: "Cersei", nonconformité: "Snow" },
  { id: 3, conformité: "Jaime", nonconformité: "Snow" },
  { id: 4, conformité: "Arya", nonconformité: "Snow" },
  { id: 5, conformité: "Daenerys", nonconformité: "Snow" },
  { id: 6, conformité: null, nonconformité: "Snow" },
  { id: 7, conformité: "Jon", nonconformité: "Snow" },
  { id: 8, conformité: "Cersei", nonconformité: "Snow" },
  { id: 9, conformité: "Jaime", nonconformité: "Snow" },
  { id: 10, conformité: "Arya", nonconformité: "Snow" },
  { id: 11, conformité: "Daenerys", nonconformité: "Snow" },
  { id: 12, conformité: null, nonconformité: "Snow" },
  { id: 13, conformité: "Jon", nonconformité: "Snow" },
  { id: 14, conformité: "Cersei", nonconformité: "Snow" },
  { id: 15, conformité: "Jaime", nonconformité: "Snow" },
];

export const TypeColumns = [
  {
    field: "id",
    headerName: "Type",
    flex: 0.3,
    align: "center",
    headerAlign: "center",
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
  {
    field: "percent",
    headerName: "%",
    flex: 0.7,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
];
export const TypeRows = [
  { id: 16, percent: "Jon" },
  { id: 17, percent: "Cersei" },
  { id: 18, percent: "Jon" },
  { id: 19, percent: "Cersei" },
  { id: 1, percent: "Jon" },
  { id: 20, percent: "Cersei" },
  { id: 1, percent: "Jon" },
  { id: 21, percent: "Cersei" },
  { id: 22, percent: "Jon" },
  { id: 23, percent: "Cersei" },
];

export const StatiqueColumns = [
  {
    field: "id",
    headerName: "Références",
    flex: 0.2,
    align: "center",
    headerAlign: "center",
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
  {
    field: "firstName",
    headerName: "Famille",
    flex: 0.2,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "lastName",
    headerName: "Taux de conformité",
    flex: 0.3,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "age",
    headerName: "Taux de non-conformité",
    type: "number",
    flex: 0.3,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
];

export const StatiqueRows = [
  { id: "A100", lastName: "Snow", firstName: "Jon", age: 35 },
  { id: "A101", lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: "A102", lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: "A103", lastName: "Stark", firstName: "Arya", age: 16 },
  { id: "A104", lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: "A105", lastName: "Melisandre", firstName: null, age: 150 },
  { id: "A106", lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: "A107", lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: "A108", lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: "A109", lastName: "Snow", firstName: "Jon", age: 35 },
  { id: "A110", lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: "A111", lastName: "Lannister", firstName: "Jaime", age: 45 },
];

export const PhaseColumnsCcp = [
  {
    field: "id",
    headerName: "Phase",
    flex: 0.2,
    align: "center",
    headerAlign: "center",
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
  {
    field: "conformité",
    headerName: "% conformité",
    flex: 0.4,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "nonconformité",
    headerName: "% non-conformité",
    flex: 0.4,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
];

export const OperateurColumns = [
  {
    field: "id",
    headerName: "Code",
    flex: 0.2,
    align: "center",
    headerAlign: "center",
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
  {
    field: "firstName",
    headerName: "Nom",
    flex: 0.2,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "lastName",
    headerName: "Taux de conformité",
    flex: 0.2,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "age",
    headerName: "Taux de non-conformité",
    type: "number",
    flex: 0.4,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
];

export const OperateurRows = [
  { id: 36, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 37, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 38, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 39, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 40, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 41, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 42, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 43, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 44, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 45, lastName: "Lannister", firstName: "Jaime", age: 45 },
];

export const OpColumns = [
  {
    field: "id",
    headerName: "Références",
    flex: 0.2,
    align: "center",
    headerAlign: "center",
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
  {
    field: "firstName",
    headerName: "Famille",
    flex: 0.2,
    editable: true,
    align: "center",
    headerAlign: "center",
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
  {
    field: "lastName",
    headerName: "% conformité",
    flex: 0.3,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "age",
    headerName: "% non-conformité",
    type: "number",
    flex: 0.3,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
];

export const listOperateurs = [
  { label: "Operateur A", code: "hjkiy@" },
  { label: "Operateur B", code: "19mloi" },
  { label: "Operateur C", code: "mùopi" },
  { label: "Operateur D", code: "*ù^ppoi" },
  { label: "Operateur E", code: "452jyt" },
  { label: "Operateur F", code: "azdft1" },
  { label: "Operateur G", code: "744liu_" },
];

export const references = [
  {
    ref: "A200",
    type: "pantalon",
    fournisseur: "Lacoste",
    etat: "good",
    typeNc: "dechet",
    action: "En cours de correction",
    famille: "Controle opérateur",
    up: "3.80",
    down: "2.69",
    pilote:"Joe"
  },
  {
    ref: "A206",
    type: "chaussure",
    fournisseur: "Lacoste",
    etat: "bad",
    typeNc: "dechet",
    action: "En cours de correction",
    famille: "Controle finale",
    up: "3.82",
    down: "2.60",
    pilote:"Dart"
  },
  {
    ref: "A300",
    type: "T-shirt",
    fournisseur: "Lacoste",
    etat: "good",
    typeNc: "dechet",
    action: "En cours de correction",
    famille: "Matiére 1ere",
    up: "3.89",
    down: "2.61",
    pilote:"Amine"
  },
  {
    ref: "A221",
    type: "maillot",
    fournisseur: "Lacoste",
    etat: "good",
    typeNc: "dechet",
    action: "En cours de correction",
    famille: "Action de correction",
    up: "3.80",
    down: "2.65",
    pilote:"Firas"
  },
];

export const matiereColumns = [
  {
    field: "id",
    headerName: "Références",
    flex: 0.2,
    align: "center",
    headerAlign: "center",
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
  {
    field: "firstName",
    headerName: "Type",
    flex: 0.2,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "lastName",
    headerName: "Fournisseur",
    flex: 0.3,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "age",
    headerName: "Etat",
    type: "number",
    flex: 0.3,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
];

export const matiereRows = [
  { id: 46, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 47, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 48, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 49, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 50, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 51, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 52, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 53, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 54, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 55, lastName: "Lannister", firstName: "Jaime", age: 45 },
];
