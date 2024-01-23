import { CustomerType } from "../../shared/constants/types";

export const customers: CustomerType[] = [
  {
    id: 0,
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: true,
  },
  {
    id: 1,
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: false,
  },
  {
    id: 2,
    name: "Ronald Richards Ronald Richards Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: false,
  },
  {
    id: 3,
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: true,
  },
  {
    id: 4,
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: true,
  },
  {
    id: 5,
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: true,
  },
  {
    id: 6,
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: true,
  },
  {
    id: 7,
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: false,
  },
  {
    id: 8,
    name: "Julia Lutey",
    company: "Tesla",
    phone: "(302) 435-5107",
    email: "julia@adobe.com",
    country: "Israel",
    status: false,
  },
  {
    id: 9,
    name: "John Doe",
    company: "Microsoft",
    phone: "(555) 123-4567",
    email: "john.doe@microsoft.com",
    country: "USA",
    status: true,
  },
  {
    id: 10,
    name: "Jane Smith",
    company: "Google",
    phone: "(555) 987-6543",
    email: "jane.smith@google.com",
    country: "Canada",
    status: false,
  },
  {
    id: 11,
    name: "Bob Johnson",
    company: "Apple",
    phone: "(555) 555-5555",
    email: "bob.johnson@apple.com",
    country: "UK",
    status: true,
  },
  {
    id: 12,
    name: "Emily Davis",
    company: "Amazon",
    phone: "(555) 333-2222",
    email: "emily.davis@amazon.com",
    country: "Germany",
    status: false,
  },
];

export const columns = [
  { label: "Customer Name", renderCell: (item: CustomerType) => item.name },
  { label: "Company", renderCell: (item: CustomerType) => item.company },
  { label: "Phone Number", renderCell: (item: CustomerType) => item.phone },
  { label: "Email", renderCell: (item: CustomerType) => item.email },
  { label: "Country", renderCell: (item: CustomerType) => item.country },
  { label: "Status", renderCell: (item: CustomerType) => item.status },
];

export const theme = {
  Cell: `
        padding: 20px 0;
        border-bottom: 1px solid #EEE;
        color: #292D32;
        font-weight: 500;
        min-width: 140px;
        
        &>div
          overflow: initial;
  
        .active {
          color: #008767;
          border: 1px solid #00B087;
          background: rgba(22, 192, 152, 0.38);
        }
        .inactive {
          color: #DF0404;
          border: 1px solid #DF0404;
          background: #FFC5C5;
        }
        .status {
          padding: 4px 0;
          text-align: center;
          font-weight: 500;
          border-radius: 4px;
          width: 80px;
          max-height: 30px;
          display: block;
        }
      `,
  HeaderCell: `
          padding: 20px 0;
          border-bottom: 1px solid #EEE;
          color: #B5B7C0;
          font-weight: 500;
          min-width: 140px;
      `,
  Table: `
      overflow-x: ayto;
      max-width: 100%;
      grid-template-columns: minmax(140px, 1fr) minmax(140px, 1fr) minmax(140px, 1fr) minmax(140px, 1fr) minmax(140px, 1fr) minmax(140px, 1fr);
      `,
};
