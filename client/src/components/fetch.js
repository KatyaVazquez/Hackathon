const getData = () => {
    fetch('http://161.35.232.68:3000/api/', {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
        query: `
          query {
             participatoryProcesses{
              title{
                translations{
                  text
                }
                }
            }
          }
        `
      })     
    }).then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(JSON.stringify(res.data));
        const datos = res.data.participatoryProcesses[0].title.translations[0].text;
        console.log(datos);
      });
  }
  getData()
const users = () => {
      fetch("http://161.35.232.68:3000/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            query {
              users {
                id
                name
              }
            }
          `,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          // console.log(JSON.stringify(res.data));
          const users = res.data.users;
          console.log(users[0].name);
        });
    }

 //   users()