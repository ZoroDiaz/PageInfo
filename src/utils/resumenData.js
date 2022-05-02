import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import GitLap from "@material-ui/icons/GitHub";
import { Assignment, AssignmentOutlined, WebOutlined } from "@mui/icons-material";

export default {
    Name: "Carlos Diaz",
    Title: "Full stack developer",

    Birthday: "25-08-1998",
    Email:"diaz123451@gmail.com",
    Address: "Leon Gto",
    Phone:"4777356909",

    socials:{
        Facebook: {
            link:"https://www.facebook.com/luis.c.arredondodiaz/",
            text: "Carlos Diaz",
            icon: <FacebookIcon/>
        },
        Linkedin: {
            link:"https://www.facebook.com/luis.c.arredondodiaz/",
            text: "Carlos Diaz",
            icon: <LinkedinIcon/>
        },
        Gitlap: {
            link:"https://www.facebook.com/luis.c.arredondodiaz/",
            text: "Carlos Diaz",
            icon: <GitLap/>
        }
    },

    about : "I am a person in constant personal and professional improvement, I would love to be able to join a company in which I can apply all my knowledge and, at the same time, that allows me to develop professionally. \n\n  As an organized and highly motivated person, I am capable of adapting to any circumstance and always giving my best in any project, while at the same time making an effort to work as a team and promote values such as camaraderie. ",
    experences : [
        {
            title: '.NET Developer in Sport Palace',
            date:'2021-Present',
            description:'Developing and maintaining business ERP modules, both web and desktop. Developing WCF and windows services. Technologies used MVVM, C# ,WPF ,WCF ,Telerick, SQL, SOAP, ASP.Net, Boostrap,Azure DevOps',
        },
        {
            title: '.NET Developer in KSP Technologies',
            date:'2020-2021',
            description:'Developing and maintaining WCF services  Technologies used C#, MVC, SQL, WCF, SOAP, Docker,Azure DevOps ',
        },
        {
            title: '.NET Developer in Calzado Yuyin',
            date:'2019-2020',
            description:'Developing and maintaining business ERP modules, both web and desktop. Developing WCF,windows services and Aplicarion for HandHeld Technologies used MVC, VB ,VB6 ,WCF ,DevExpress, SQL, SOAP, ASP.Net, Boostrap,SVN Tortoise, Crystal Report',
        },
    ],
    education : [
        {
            title: 'Licenciatura Ingenieria En Tecnologias de la informacion y comunicacion',
            date:'2018-2020',
            description:'Certification',
        },
        {
            title: 'TSU En Tecnologias de la informacion y comunicacion',
            date:'2016-2018',
            description:'Certification',
        },
    ],

    services: [
        {
            title: 'Web Developer',
            description: 'Ihave a been a badass web developer for 10 years',
            icon: <WebOutlined />
        },
        {
            title: 'DevOps',
            description: 'Ihave a been a badass web developer for 10 years',
            icon: <AssignmentOutlined />
        },
        {
            title: 'Web Dev',
            description: 'Ihave a been a badass web developer for 10 years',
            icon: <WebOutlined />
        },
    ],

    skills: [
        {
            title: 'FRONT-END',
            description: [
                'REACTJS',
                'JavaScript',
                'TypeScript',
                'Bootstrap',
                'Material UI'
            ],
        },
        {
            title:'BACK-END',
            description: ['NodeJs', 'Java', 'Python']
        },
        {
            title:'DATABASE',
            description: ['Firebase', 'Ms Sql Server','MySQL']
        },
        {
            title: 'SOURCE CONTROL',
            description: ['Git', 'GitHub', 'Scrum/Agile']
        }
    ]
  }