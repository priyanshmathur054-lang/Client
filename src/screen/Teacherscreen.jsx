import React from 'react'

const Teacherscreen = () => {
   const [teacher, setteachers] = React.useState([
        {
    
          "id": 1,
          "name": "Mahesh Sharma",
          "phone": "9000000001",
          "email": "mahes@example.com",
          "dob": "2002-05-14",
          "createdAt": "2026-10-01T10:00:00Z",
          "updatedAt": "2026-10-10T12:30:00Z"
        },
        {
          "id": 2,
          "name": "Priyansh Verma",
          "phone": "9000000002",
          "email": "priyansh@example.com",
          "dob": "2003-08-21",
          "createdAt": "2026-10-02T11:00:00Z",
          "updatedAt": "2026-10-11T13:00:00Z"
        },
        {
          "id": 3,
          "name": "jay Singh",
          "phone": "9000000003",
          "email": "jay@example.com",
          "dob": "2001-12-09",
          "createdAt": "2026-10-03T09:30:00Z",
          "updatedAt": "2026-10-12T14:00:00Z"
        },
        {
          "id": 4,
          "name": "ishan Patel",
          "phone": "9000000004",
          "email": "ishan@example.com",
          "dob": "2002-03-17",
          "createdAt": "2026-10-04T08:00:00Z",
          "updatedAt": "2026-10-13T15:30:00Z"
        },
        {
          "id": 5,
          "name": "shryansh Mehta",
          "phone": "9000000005",
          "email": "shreyansh@example.com",
          "dob": "2003-11-25",
          "createdAt": "2026-10-05T10:15:00Z",
          "updatedAt": "2026-10-14T11:45:00Z"
        },
        {
          "id": 6,
          "name": "sonam Gupta",
          "phone": "9000000006",
          "email": "sonam@example.com",
          "dob": "2002-07-06",
          "createdAt": "2026-10-06T12:00:00Z",
          "updatedAt": "2026-10-12T16:00:00Z"
        },
        {
          "id": 7,
          "name": "Karan Joshi",
          "phone": "9000000007",
          "email": "karan@example.com",
          "dob": "2001-09-30",
          "createdAt": "2026-10-07T09:00:00Z",
          "updatedAt": "2026-10-13T10:30:00Z"
        },
        {
          "id": 8,
          "name": "Anjali Sherma",
          "phone": "9000000008",
          "email": "anjali@example.com",
          "dob": "2003-01-12",
          "createdAt": "2026-10-08T11:30:00Z",
          "updatedAt": "2026-10-14T12:00:00Z"
        },
        {
          "id": 9,
          "name": "Kunal Kumar",
          "phone": "9000000009",
          "email": "Kunal@example.com",
          "dob": "2002-06-19",
          "createdAt": "2026-10-09T08:45:00Z",
          "updatedAt": "2026-10-09T08:45:00Z"
        },
        {
          "id": 10,
          "name": "Simran mathur",
          "phone": "9000000010",
          "email": "simran@example.com",
          "dob": "2003-04-23",
          "createdAt": "2026-10-10T10:00:00Z",
          "updatedAt": "2026-10-10T10:00:00Z"
        },
        {
          "id": 11,
          "name": "Vikas Jain",
          "phone": "9000000011",
          "email": "vikas@example.com",
          "dob": "2001-10-05",
          "createdAt": "2026-10-11T13:00:00Z",
          "updatedAt": "2026-10-14T14:30:00Z"
        },
        {
          "id": 12,
          "name": "Suriyansh Rathore",
          "phone": "9000000012",
          "email": "suriyansh@example.com",
          "dob": "2002-02-28",
          "createdAt": "2026-10-12T09:30:00Z",
          "updatedAt": "2026-10-15T10:00:00Z"
        }
      ]);
         return (
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Dob</th>
                <th>CreateAt</th>
                <th>UpdateAt</th>
              </tr>
            </thead>
            <tbody>
              {
                teacher.map((sRow) => (
                  <tr>
                    <td>{sRow.id}</td>
                    <td>{sRow.name}</td>
                    <td>{sRow.phone}</td>
                    <td>{sRow.email}</td>
                    <td>{sRow.dob}</td>
                    <td>{sRow.createdAt}</td>
                    <td>{sRow.updatedAt}</td>
                  </tr>))}
            </tbody>
    
          </table>
        </div>
    
    
    
   );
}

export default Teacherscreen