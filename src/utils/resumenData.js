import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import GitLap from "@material-ui/icons/GitHub";
import { Assignment, AssignmentOutlined, WebOutlined } from "@mui/icons-material";

export default {
    Name: "Carlos Diaz",
    Title: "Desarrollador Full Stack",

    Birthday: "25-08-1998",
    Email:"diaz123451@gmail.com",
    Address: "León Gto",
    Phone:"4777356909",

    socials:{
        Facebook: {
            link:"https://www.facebook.com/luis.c.arredondodiaz/",
            text: "Carlos Diaz",
            icon: <FacebookIcon/>
        },
        Linkedin: {
            link:"https://www.linkedin.com/in/luis-carlos-arredondo-d%C3%ACaz-04baa81b8/",
            text: "Luis Carlos Arredondo Díaz",
            icon: <LinkedinIcon/>
        },
        Gitlap: {
            link:"https://gitlab.com/CarlosDiaz25",
            text: "CarlosDiaz25",
            icon: <GitLap/>
        }
    },

    about : "Soy una persona en constante superación personal y profesional, me encantaría poder incorporarme a una empresa en la que pueda aplicar todos mis conocimientos y, al mismo tiempo, que me permita desarrollarme profesionalmente. \n\n Como persona organizada y muy motivada, soy capaz de adaptarme a cualquier circunstancia y dar siempre lo mejor de mí en cualquier proyecto, al mismo tiempo que me esfuerzo por trabajar en equipo y fomentar valores como el compañerismo.",
    experences : [
        {
            title: 'Desarrollador .Net en Sport Palace',
            date:'2021 - Actual',
            description:'Desarrollo y mantenimiento ERP Empresarial, Desarrollo de Aplicaciones web con asp.net, servicios WCF y Servicios de Windows en .NET. Tecnologías Usadas: .Net, C#, WPF, WCF, MVVM, SQL, TFS, SOAP, Unit Test, Asp .net, net. Core, Bootstrap, Css, JS ,JQuery'
        },
        {
            title: 'Desarrollador Jr en KSP TECHNOLOGY',
            date:'2020-2021',
            description:'Desarrollo y mantenimiento de Web APIS en .NET. Tecnologías Usadas: C#, WCF, Net core, SQL, Azure  DepOps, TFS, Soap',
        },
        {
            title: 'Desarrollador Jr en Calzado Yuyin',
            date:'2019-2020',
            description:'Desarrollando módulos para el ERP empresarial en Visual Basic.  Tecnologías Usadas: VB, VB6,MVC ,Asp.net, WCF,SQL, SVN, SOAP, Xamarin, Boostrap, Css, JS, Jquery'
        },
    ],
    education : [
        {
            title: 'Licenciatura Ingenieria En Tecnologias de la informacion y comunicacion',
            date:'2018-2020',
            description:'Certificado',
        },
        {
            title: 'TSU En Tecnologias de la informacion y comunicacion',
            date:'2016-2018',
            description:'Certificado',
        },
    ],

    services: [
        {
            title: 'Desarrollador Web',
            description: 'Tengo mas de 1 años como desarrollador web',
            icon: <WebOutlined />
        },
        {
            title: 'Desarrollador Escritorio',
            description: 'Tengo mas de 3 años como desarrollador escritorio',
            icon: <AssignmentOutlined />
        },
        {
            title: 'Desarrollador Movil',
            description: 'Tengo mas de 1 años como desarrollador movil',
            icon: <WebOutlined />
        },
    ],

    skills: [
        {
            title: 'Front-End',
            description: [
                'React Js',
                'Angular 8',
                'Html 5',
                'Css 3',
                'Windows Form',
                'WPF'
            ],
        },
        {
            title:'Back-End',
            description: ['NodeJs', '.Net', 'Java']
        },
        {
            title:'DATABASE',
            description: ['Sql Server','MySQL', 'Mongo db']
        },
        {
            title: 'SOURCE CONTROL',
            description: ['Git', 'SVN Tortoise', 'TFS']
        }
    ]
  }