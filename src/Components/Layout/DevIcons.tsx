import React, { useState } from 'react';

const DevIcons = () => {
  const [hoveredIconIndex, setHoveredIconIndex] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setHoveredIconIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIconIndex(-1);
  };

  const icons = [
    {
        id: 1,
        class: "devicon-npm-original-wordmark",
        website: "https://npmjs.com"
    },
    {
        id: 2,
        class: "devicon-javascript-plain",
        website: "https://javascript.com"
    },
    {
        id: 3,
        class: "devicon-typescript-plain",
        website: "https://www.typescriptlang.org/"
    },
    {
        id: 4,
        class: "devicon-react-original",
        website: "https://react.dev/"
    },
    {
        id: 5,
        class: "devicon-express-original",
        website: "https://expressjs.com/"
    },
    {
        id: 6,
        class: "devicon-csharp-line",
        website: "https://dotnet.microsoft.com/en-us/languages/csharp"
    },
    {
        id: 7,
        class: "devicon-dot-net-plain",
        website: "https://dotnet.microsoft.com/"
    },
    {
        id: 8,
        class: "devicon-linux-plain",
        website: ""
    },
    {
        id: 9,
        class: "devicon-mysql-plain-wordmark",
        website: "https://www.mysql.com/"
    },
    {
        id: 10,
        class: "devicon-mariadb-original-wordmark",
        website: "https://mariadb.org/"
    },
    {
        id: 11,
        class: "devicon-nginx-original",
        website: "https://nginx.org/en/"
    },

    {
        id: 12,
        class: "devicon-php-plain",
        website: "https://php.net"
    },
    {
        id: 13,
        class: "devicon-java-plain",
        website: "https://java.com"
    },
    {
        id: 14,
        class: "devicon-git-plain",
        website: "https://git-scm.com/"
    },
    {
        id: 15,
        class: "devicon-dotnetcore-plain",
        website: "https://dotnet.microsoft.com/"
    },
    {
        id: 16,
        class: "devicon-windows11-original",
        website: "https://www.microsoft.com/en-us/windows?r=1"
    },
  ];

  return (
    <div>
        <div className="d-flex flex-wrap justify-content-center">
            {
                icons.map(icons => (
                    <a key={icons.id} className="text-decoration-none" href={icons.website} target="_blank" onMouseEnter={() => handleMouseEnter(icons.id)} onMouseLeave={handleMouseLeave}>
                        <i className={`${hoveredIconIndex === icons.id ? icons.class + " colored devIcons-fade-in" : icons.class + " text-white devIcons-fade-out"} mx-1`}></i>
                    </a>
                ))
            }
        </div>
    </div>
  )

}

export default DevIcons;