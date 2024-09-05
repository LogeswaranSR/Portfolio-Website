// import HeroSectionImage from "../assets/images/HeroSectionImage.jpg"
import Project2048 from "../assets/images/Project2048 Screenshot.png"
import EDA from "../assets/images/EDA Screenshot 2.png"
import AIChaperone from "../assets/images/AI Chaperone - App Logo.jpg" 
import AquaSense from "../assets/images/AquaSense - App Logo.png"
import MineAI from "../assets/images/MineAI logo.png"
import React from "../assets/images/React Icon.png"
import Flask from "../assets/images/Flask Logo.png"
import Flutter from "../assets/images/Flutter Logo.png"
import Firebase from "../assets/images/Firebase Logo.png"
import PyTorch from "../assets/images/Pytorch Logo.png"
import Tensorflow from "../assets/images/Tensorflow Logo.png"
import Django from "../assets/images/Django Logo.png"
import SQL from "../assets/images/SQL Logo.png"
import Seaborn from "../assets/images/Seaborn Logo.png"
import Pandas from "../assets/images/Pandas Python.png"
import Numpy from "../assets/images/Numpy Logo.png"
import Opencv from "../assets/images/Opencv Logo.png"
import PowerBI from "../assets/images/Power BI Logo.png"
import VEI from "../assets/images/VEI Technologies.jpg"
import Prodigy from "../assets/images/Prodigy Infotech.jpg"
import Andiran from "../assets/images/Andiran HealthTech Logo (Without Text).jpg"
import ThinkTank from "../assets/images/srinivasa_ramanuja_think_tank_logo.jpg"
import Zoho from "../assets/images/Zoho Logo.png"
import LeetCode from "../assets/images/Leetcode Logo.png"
import LinkedIn from "../assets/images/Linkedin Logo.png"
import HuggingFace from "../assets/images/Huggingface Logo.png"
import GitHub from "../assets/images/github-mark-white.png"

export const ProjectData = [
    {
        imgsrc: Project2048,
        title:"2048 Clone game",
        description:"A simple clone website of 2048 game. Join the blocks and try to reach the 2048 tile!! Try the game by chlicking here!",
        linkToProject:"/2048"
    },
    {
        imgsrc: EDA,
        title:"Data Analysis",
        description:"Explore this Data Analysis project, where I processed and analyzed three datasets using Python. Check out the repository for datasets and Python Notebooks by clicking here!",
        linkToProject:"https://github.com/LogeswaranSR/Exploratory-Data-Analysis"
    },
    {
        imgsrc: AIChaperone,
        title: "AI Chaperone (Ongoing)",
        description: "An AI speech companion to support Alzheimer's patients, featuring location tracking, guardian contact, and mental health monitoring. Additionally, it integrates a chatbot powered by RAG, offering accurate information and answers to Alzheimer's-related queries.",
    },
    {
        imgsrc: AquaSense,
        title:"AquaSense",
        description:"An Intelligent Water Flow Monitoring System using IoT technology to optimize water usage in urban households. A network of sensors integrated in the Household Water System to monitor and control water flow in every section of your house.",
        // linkToProject:"/"
    },
    {
        imgsrc: MineAI,
        title:"MineAI",
        description: "A friendly and knowledgeable chatbot proficient in India's mining laws and regulations. Powered by the fine-tuned FLAN T5 model for accurate question-answering.",
        // linkToProject:"/"
    },
    // {
    //     imgsrc: HeroSectionImage,
    //     title:"Sample Title",
    //     description:"Sample Text",
    //     // linkToProject:"/"
    // }
]

export const EducationData = [
    {
        title: "Sri Sairam Institute of Technology",
        logo: "../assets/images/btech-clg-logo.png",
        degree: "B.Tech - Artificial Intelligence and Data Science",
        period: "2021 - 2025",
        location: "Chennai, Tamil Nadu, India",
        gpa: "8.83",
        desc: "Currently pursuing a Bachelor of Technology (B.Tech) in Artificial Intelligence and Data Science, with a strong focus on deepening understanding and expertise in the field of AI. "
    }
]

export const SkillsData = {
    "Full Stack": [
        {
            name: "React",
            logo: React
        },
        {
            name: "Flask",
            logo: Flask
        },
        {
            name: "Django",
            logo: Django
        },
        {
            name: "SQL",
            logo: SQL
        },
    ],
    "Mobile App Development":[
        {
            name: "React Native",
            logo: React
        },
        {
            name: "Flutter",
            logo: Flutter
        },
        {
            name: "Firebase",
            logo: Firebase
        },
    ],
    "AI & ML": [
        {
            name: "PyTorch",
            logo: PyTorch
        },
        {
            name: "Tensorflow",
            logo: Tensorflow
        },
        {
            name: "OpenCV",
            logo: Opencv
        },
    ],
    "Data Science":[
        {
            name: "Numpy",
            logo: Numpy
        },
        {
            name: "Pandas",
            logo: Pandas
        },
        {
            name: "Seaborn",
            logo: Seaborn
        },
        {
            name: "Power BI",
            logo: PowerBI
        },
    ]
}

export const ExperienceData = {
    "Internship":[
        {
            role:"Project Intern",
            company:"Andiran Healthtech Pvt. Ltd.",
            period:"10/06/2024 - 09/07/2024",
            desc:"Offline Internship, Contributed to developing an application with Flutter and Firebase.",
            img: Andiran
        },
        {
            role: "ML Intern",
            company: "Prodigy Infotech",
            period: "15/12/2023 - 15/01/2024",
            desc: "Online Internship as a Machine Learning Intern; Worked hands-on with Machine Learning models.",
            img: Prodigy
        },
        {
            role: "AI Intern",
            company: "VEI Technologies",
            period: "26/07/2023 - 09/08/2023",
            desc: "Offline Internship - gained insights on usage of AI in Industry.",
            img: VEI
        },
    ],
    "Current":[
        {
            role:"Project Trainee",
            company:"Zoho Corporation Pvt. Ltd.",
            start_date:"08/2024",
            desc:"Front-end Developer in Zoho Expense Team.",
            img: Zoho
        },
        {
            role:"Research Assistant",
            company:"The Srinivasa Ramanuja Think Tank",
            start_date:"01/2024",
            desc:"Research Assistant, in-charge of Deep Learning Team.",
            img:ThinkTank
        }
    ]
}

export const ContactMe = [
    {
        name:"LinkedIn",
        img: LinkedIn,
        link:"https://www.linkedin.com/in/logeswaran-sr-957a0a242/"
    },
    {
        name:"HuggingFace",
        img:HuggingFace,
        link:"https://huggingface.co/Logeswaransr"
    },
    {
        name:"GitHub",
        img:GitHub,
        link:"https://github.com/LogeswaranSR"
    },
    {
        name:"LeetCode",
        img:LeetCode,
        link:"https://leetcode.com/u/logeswaransr2004/"
    }
]