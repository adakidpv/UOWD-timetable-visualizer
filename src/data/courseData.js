// src/data/courseData.js

export const courseData = {
  "subjects": [
    {
      "code": "ARA101",
      "name": "Arabic for Beginners 1A",
      "faculty": "UOWD College",
      "degree": "Bachelor of Engineering (Honours), Bachelor of Computer Science, Bachelor of Business, Bachelor of Communication and Media, Bachelor of Business Information Systems, Bachelor of Psychological Science, University Freshman Year, Bachelor of Business Administration",
      "additionalInfo": "Tutorials start in week 1",
      "componentGroups": [
        {
          "groupType": "tutorial_group",
          "name": "Tutorial Group",
          "components": ["Tutorial A", "Tutorial B"],
          "options": [
            { "groupId": "group1", "ids": ["ara101-tutorialA-1", "ara101-tutorialB-1"] },
            { "groupId": "group2", "ids": ["ara101-tutorialA-2", "ara101-tutorialB-2"] },
            { "groupId": "group3", "ids": ["ara101-tutorialA-3", "ara101-tutorialB-3"] },
            { "groupId": "group4", "ids": ["ara101-tutorialA-4", "ara101-tutorialB-4"] }
          ]
        }
      ],
      "components": [
        {
          "name": "Tutorial A",
          "required": 1,
          "options": [
            {
              "id": "ara101-tutorialA-1",
              "sessions": [
                {
                  "type": "Tutorial A (Group 1)",
                  "day": "Monday",
                  "startTime": "11:30",
                  "endTime": "13:30",
                  "location": "4.50-Classroom B",
                  "instructor": "Nancy El Sobkey"
                }
              ]
            },
            {
              "id": "ara101-tutorialA-2",
              "sessions": [
                {
                  "type": "Tutorial A (Group 2)",
                  "day": "Monday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "5.12-Informal Classroom",
                  "instructor": "Nancy El Sobkey"
                }
              ]
            },
            {
              "id": "ara101-tutorialA-3",
              "sessions": [
                {
                  "type": "Tutorial A (Group 3)",
                  "day": "Monday",
                  "startTime": "09:30",
                  "endTime": "11:30",
                  "location": "4.45-Classroom B",
                  "instructor": "Katia Freywat"
                }
              ]
            },
            {
              "id": "ara101-tutorialA-4",
              "sessions": [
                {
                  "type": "Tutorial A (Group 4)",
                  "day": "Monday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "6.38-Classroom B",
                  "instructor": "Katia Freywat"
                }
              ]
            }
          ]
        },
        {
          "name": "Tutorial B",
          "required": 1,
          "options": [
            {
              "id": "ara101-tutorialB-1",
              "sessions": [
                {
                  "type": "Tutorial B (Group 1)",
                  "day": "Wednesday",
                  "startTime": "11:30",
                  "endTime": "13:30",
                  "location": "3.48-Classroom B",
                  "instructor": "Nancy El Sobkey"
                }
              ]
            },
            {
              "id": "ara101-tutorialB-2",
              "sessions": [
                {
                  "type": "Tutorial B (Group 2)",
                  "day": "Wednesday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "5.12-Informal Classroom",
                  "instructor": "Nancy El Sobkey"
                }
              ]
            },
            {
              "id": "ara101-tutorialB-3",
              "sessions": [
                {
                  "type": "Tutorial B (Group 3)",
                  "day": "Thursday",
                  "startTime": "09:30",
                  "endTime": "11:30",
                  "location": "5.10-Classroom B",
                  "instructor": "Katia Freywat"
                }
              ]
            },
            {
              "id": "ara101-tutorialB-4",
              "sessions": [
                {
                  "type": "Tutorial B (Group 4)",
                  "day": "Thursday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "6.39-Classroom A",
                  "instructor": "Katia Freywat"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "code": "CSCI251",
      "name": "Advanced Programming",
      "faculty": "School of Computer Science",
      "degree": "Bachelor of Computer Science",
      "componentGroups": [
        {
          "groupType": "lecturer_group",
          "name": "Lecture Group",
          "components": ["Lecture A", "Lecture B"],
          "options": [
            { "groupId": "hclim", "instructorName": "HC Lim", "ids": ["csci251-lectureA-1", "csci251-lectureB-1"] },
            { "groupId": "abdellatif1", "instructorName": "Abdellatif Tchantchane", "ids": ["csci251-lectureA-2", "csci251-lectureB-2"] },
            { "groupId": "abdellatif2", "instructorName": "Abdellatif Tchantchane", "ids": ["csci251-lectureA-3", "csci251-lectureB-3"] }
          ]
        }
      ],
      "components": [
        {
          "name": "Computer Lab",
          "required": 1,
          "options": [
            {
              "id": "csci251-lab-1",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "6.36-Computer Lab (Single Screen)",
                  "instructor": "Shahrul Sah"
                }
              ]
            },
            {
              "id": "csci251-lab-2",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "18:30",
                  "endTime": "20:30",
                  "location": "2.50-Computer Lab Single",
                  "instructor": "Shahrul Sah"
                }
              ]
            },
            {
              "id": "csci251-lab-3",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "16:30",
                  "endTime": "18:30",
                  "location": "4.42-Computer Lab (Single Screen)",
                  "instructor": "Shahrul Sah"
                }
              ]
            },
            {
              "id": "csci251-lab-4",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "16:30",
                  "endTime": "18:30",
                  "location": "3.47-Game Dev Lab Dual Screens",
                  "instructor": "Shahrul Sah"
                }
              ]
            },
            {
              "id": "csci251-lab-5",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Thursday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "2.50-Computer Lab Single",
                  "instructor": "Shahrul Sah"
                }
              ]
            },
            {
              "id": "csci251-lab-6",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "18:30",
                  "endTime": "20:30",
                  "location": "6.36-Computer Lab (Single Screen)",
                  "instructor": "Omar Daoudi"
                }
              ]
            },
            {
              "id": "csci251-lab-7",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Friday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "6.36-Computer Lab (Single Screen)",
                  "instructor": "Omar Daoudi"
                }
              ]
            },
            {
              "id": "csci251-lab-8",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "6.40-Computer Lab Single",
                  "instructor": "Omar Daoudi"
                }
              ]
            },
            {
              "id": "csci251-lab-9",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Friday",
                  "startTime": "16:30",
                  "endTime": "18:30",
                  "location": "6.40-Computer Lab Single",
                  "instructor": "Omar Daoudi"
                }
              ]
            },
            {
              "id": "csci251-lab-10",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "6.36-Computer Lab (Single Screen)",
                  "instructor": "Omar Daoudi"
                }
              ]
            },
            {
              "id": "csci251-lab-11",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "18:30",
                  "endTime": "20:30",
                  "location": "3.47-Game Dev Lab Dual Screens",
                  "instructor": "Sonia Dagou"
                }
              ]
            },
            {
              "id": "csci251-lab-12",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "1.52-Computer Lab Single",
                  "instructor": "Sonia Dagou"
                }
              ]
            },
            {
              "id": "csci251-lab-13",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "1.52-Computer Lab Single",
                  "instructor": "Sonia Dagou"
                }
              ]
            },
            {
              "id": "csci251-lab-14",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Thursday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "4.42-Computer Lab (Single Screen)",
                  "instructor": "Sonia Dagou"
                }
              ]
            },
            {
              "id": "csci251-lab-15",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "1.52-Computer Lab Single",
                  "instructor": "Sonia Dagou"
                }
              ]
            },
            {
              "id": "csci251-lab-16",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "18:30",
                  "endTime": "20:30",
                  "location": "4.42-Computer Lab (Single Screen)",
                  "instructor": "Obaid Ullah"
                }
              ]
            },
            {
              "id": "csci251-lab-17",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "4.42-Computer Lab (Single Screen)",
                  "instructor": "Obaid Ullah"
                }
              ]
            },
            {
              "id": "csci251-lab-18",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "16:30",
                  "endTime": "18:30",
                  "location": "4.42-Computer Lab (Single Screen)",
                  "instructor": "Obaid Ullah"
                }
              ]
            },
            {
              "id": "csci251-lab-19",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "4.42-Computer Lab (Single Screen)",
                  "instructor": "Obaid Ullah"
                }
              ]
            },
            {
              "id": "csci251-lab-20",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Thursday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "1.52-Computer Lab Single",
                  "instructor": "Obaid Ullah"
                }
              ]
            },
            {
              "id": "csci251-lab-21",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "1.52-Computer Lab Single",
                  "instructor": "Obaid Ullah"
                }
              ]
            }
          ]
        },
        {
          "name": "Lecture A",
          "required": 1,
          "options": [
            {
              "id": "csci251-lectureA-1",
              "sessions": [
                {
                  "type": "Lecture A",
                  "day": "Monday",
                  "startTime": "08:30",
                  "endTime": "10:30",
                  "location": "0.17-Lecture Theatre",
                  "instructor": "HC Lim"
                }
              ]
            },
            {
              "id": "csci251-lectureA-2",
              "sessions": [
                {
                  "type": "Lecture A",
                  "day": "Monday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "0.17-Lecture Theatre",
                  "instructor": "Abdellatif Tchantchane"
                }
              ]
            },
            {
              "id": "csci251-lectureA-3",
              "sessions": [
                {
                  "type": "Lecture A",
                  "day": "Monday",
                  "startTime": "16:30",
                  "endTime": "18:30",
                  "location": "0.17-Lecture Theatre",
                  "instructor": "Abdellatif Tchantchane"
                }
              ]
            }
          ]
        },
        {
          "name": "Lecture B",
          "required": 1,
          "options": [
            {
              "id": "csci251-lectureB-1",
              "sessions": [
                {
                  "type": "Lecture B",
                  "day": "Wednesday",
                  "startTime": "08:30",
                  "endTime": "10:30",
                  "location": "0.17-Lecture Theatre",
                  "instructor": "HC Lim"
                }
              ]
            },
            {
              "id": "csci251-lectureB-2",
              "sessions": [
                {
                  "type": "Lecture B",
                  "day": "Tuesday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "0.17-Lecture Theatre",
                  "instructor": "Abdellatif Tchantchane"
                }
              ]
            },
            {
              "id": "csci251-lectureB-3",
              "sessions": [
                {
                  "type": "Lecture B",
                  "day": "Tuesday",
                  "startTime": "16:30",
                  "endTime": "18:30",
                  "location": "0.17-Lecture Theatre",
                  "instructor": "Abdellatif Tchantchane"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "code": "CSCI369",
      "name": "Ethical Hacking",
      "faculty": "School of Engineering",
      "degree": "Bachelor of Computer Science",
      "components": [
        {
          "name": "Computer Lab",
          "required": 1,
          "options": [
            {
              "id": "csci369-lab-1",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "3.52-Computer Lab (Network)",
                  "instructor": "Mohamed Hamouda"
                }
              ]
            },
            {
              "id": "csci369-lab-2",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Monday",
                  "startTime": "16:30",
                  "endTime": "18:30",
                  "location": "3.52-Computer Lab (Network)",
                  "instructor": "Tina Thomas"
                }
              ]
            },
            {
              "id": "csci369-lab-3",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Monday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "3.52-Computer Lab (Network)",
                  "instructor": "Manoj Kumar"
                }
              ]
            },
            {
              "id": "csci369-lab-4",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "3.52-Computer Lab (Network)",
                  "instructor": "Manoj Kumar"
                }
              ]
            },
            {
              "id": "csci369-lab-5",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Friday",
                  "startTime": "16:30",
                  "endTime": "18:30",
                  "location": "3.52-Computer Lab (Network)",
                  "instructor": "Suzan Sallam"
                }
              ]
            },
            {
              "id": "csci369-lab-6",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "16:30",
                  "endTime": "18:30",
                  "location": "3.52-Computer Lab (Network)",
                  "instructor": "Suzan Sallam"
                }
              ]
            },
            {
              "id": "csci369-lab-7",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Monday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "3.52-Computer Lab (Network)",
                  "instructor": "Mohamed Hamouda"
                }
              ]
            }
          ]
        },
        {
          "name": "Lecture",
          "required": 1,
          "options": [
            {
              "id": "csci369-lecture-1",
              "sessions": [
                {
                  "type": "Lecture",
                  "day": "Tuesday",
                  "startTime": "08:30",
                  "endTime": "10:30",
                  "location": "0.17-Lecture Theatre",
                  "instructor": "Manoj Kumar"
                }
              ]
            }
          ]
        },
        {
          "name": "Tutorial",
          "required": 1,
          "options": [
            {
              "id": "csci369-tutorial-1",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Monday",
                  "startTime": "14:30",
                  "endTime": "15:30",
                  "location": "3.48-Classroom B",
                  "instructor": "Tina Thomas"
                }
              ]
            },
            {
              "id": "csci369-tutorial-2",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Monday",
                  "startTime": "11:30",
                  "endTime": "12:30",
                  "location": "6.39-Classroom A",
                  "instructor": "Tina Thomas"
                }
              ]
            },
            {
              "id": "csci369-tutorial-3",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Tuesday",
                  "startTime": "14:30",
                  "endTime": "15:30",
                  "location": "4.48-Classroom B",
                  "instructor": "Tina Thomas"
                }
              ]
            },
            {
              "id": "csci369-tutorial-4",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Monday",
                  "startTime": "13:30",
                  "endTime": "14:30",
                  "location": "5.17-Classroom VC",
                  "instructor": "Suzan Sallam"
                }
              ]
            },
            {
              "id": "csci369-tutorial-5",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Monday",
                  "startTime": "09:30",
                  "endTime": "10:30",
                  "location": "6.38-Classroom B",
                  "instructor": "Suzan Sallam"
                }
              ]
            },
            {
              "id": "csci369-tutorial-6",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Monday",
                  "startTime": "13:30",
                  "endTime": "14:30",
                  "location": "5.10-Classroom B",
                  "instructor": "Tina Thomas"
                }
              ]
            },
            {
              "id": "csci369-tutorial-7",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Wednesday",
                  "startTime": "15:30",
                  "endTime": "16:30",
                  "location": "4.52-Classroom A",
                  "instructor": "Suzan Sallam"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "code": "CSCI435",
      "name": "Computer Vision Algorithms and Systems",
      "faculty": "School of Computer Science",
      "degree": "Bachelor of Computer Science",
      "components": [
        {
          "name": "Computer Lab",
          "required": 1,
          "options": [
            {
              "id": "csci435-lab-1",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "4.42-Computer Lab (Single Screen)",
                  "instructor": "Asma Damankesh"
                }
              ]
            },
            {
              "id": "csci435-lab-2",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "16:30",
                  "endTime": "18:30",
                  "location": "3.47-Game Dev Lab Dual Screens",
                  "instructor": "George Tsaramirsis"
                }
              ]
            },
            {
              "id": "csci435-lab-3",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Thursday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "1.52-Computer Lab Single",
                  "instructor": "George Tsaramirsis"
                }
              ]
            },
            {
              "id": "csci435-lab-4",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Monday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "6.36-Computer Lab (Single Screen)",
                  "instructor": "Asma Damankesh"
                }
              ]
            }
          ]
        },
        {
          "name": "Lecture",
          "required": 1,
          "options": [
            {
              "id": "csci435-lecture-1",
              "sessions": [
                {
                  "type": "Lecture",
                  "day": "Thursday",
                  "startTime": "11:30",
                  "endTime": "13:30",
                  "location": "5.134-Classroom A 5.13 & 5.14",
                  "instructor": "George Tsaramirsis"
                }
              ]
            }
          ]
        },
        {
          "name": "Tutorial",
          "required": 1,
          "options": [
            {
              "id": "csci435-tutorial-1",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Monday",
                  "startTime": "10:30",
                  "endTime": "11:30",
                  "location": "5.10-Classroom B",
                  "instructor": "Asma Damankesh"
                }
              ]
            },
            {
              "id": "csci435-tutorial-2",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Wednesday",
                  "startTime": "11:30",
                  "endTime": "12:30",
                  "location": "4.48-Classroom B",
                  "instructor": "Asma Damankesh"
                }
              ]
            },
            {
              "id": "csci435-tutorial-3",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Monday",
                  "startTime": "15:30",
                  "endTime": "16:30",
                  "location": "5.134-Classroom A 5.13 & 5.14",
                  "instructor": "Asma Damankesh"
                }
              ]
            },
            {
              "id": "csci435-tutorial-4",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Monday",
                  "startTime": "09:30",
                  "endTime": "10:30",
                  "location": "5.18-Classroom A",
                  "instructor": "Asma Damankesh"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "code": "CSIT314",
      "name": "Software Development Methodologies",
      "faculty": "School of Computer Science",
      "degree": "Bachelor of Computer Science, Bachelor of Business Information Systems",
      "components": [
        {
          "name": "Computer Lab",
          "required": 1,
          "options": [
            {
              "id": "csit314-lab-1",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "18:30",
                  "endTime": "20:30",
                  "location": "3.47-Game Dev Lab Dual Screens",
                  "instructor": "Deepa Keshavamurthy"
                }
              ]
            },
            {
              "id": "csit314-lab-2",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "3.47-Game Dev Lab Dual Screens",
                  "instructor": "Deepa Keshavamurthy"
                }
              ]
            },
            {
              "id": "csit314-lab-3",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Monday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "1.52-Computer Lab Single",
                  "instructor": "Deepa Keshavamurthy"
                }
              ]
            },
            {
              "id": "csit314-lab-4",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "18:30",
                  "endTime": "20:30",
                  "location": "1.52-Computer Lab Single",
                  "instructor": "Sara Azeem Khan"
                }
              ]
            },
            {
              "id": "csit314-lab-5",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Thursday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "3.47-Game Dev Lab Dual Screens",
                  "instructor": "Sara Azeem Khan"
                }
              ]
            },
            {
              "id": "csit314-lab-6",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "6.36-Computer Lab (Single Screen)",
                  "instructor": "Sara Azeem Khan"
                }
              ]
            }
          ]
        },
        {
          "name": "Lecture",
          "required": 1,
          "options": [
            {
              "id": "csit314-lecture-1",
              "sessions": [
                {
                  "type": "Lecture",
                  "day": "Wednesday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "0.17-Lecture Theatre",
                  "instructor": "Nkqubela Ruxwana"
                }
              ]
            },
            {
              "id": "csit314-lecture-2",
              "sessions": [
                {
                  "type": "Lecture",
                  "day": "Wednesday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "0.17-Lecture Theatre",
                  "instructor": "Nkqubela Ruxwana"
                }
              ]
            },
            {
              "id": "csit314-lecture-3",
              "sessions": [
                {
                  "type": "Lecture",
                  "day": "Thursday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "6.32-Classroom B",
                  "instructor": "Nkqubela Ruxwana"
                }
              ]
            }
          ]
        },
        {
          "name": "Tutorial",
          "required": 1,
          "options": [
            {
              "id": "csit314-tutorial-1",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Wednesday",
                  "startTime": "16:30",
                  "endTime": "17:30",
                  "location": "3.45-Classroom B",
                  "instructor": "Tauqeer Faiz"
                }
              ]
            },
            {
              "id": "csit314-tutorial-2",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Wednesday",
                  "startTime": "11:30",
                  "endTime": "12:30",
                  "location": "4.50-Classroom B",
                  "instructor": "Tauqeer Faiz"
                }
              ]
            },
            {
              "id": "csit314-tutorial-3",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Tuesday",
                  "startTime": "09:30",
                  "endTime": "10:30",
                  "location": "5.12-Informal Classroom",
                  "instructor": "Tauqeer Faiz"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "code": "INFO411",
      "name": "Data Mining and Knowledge Discovery",
      "faculty": "School of Engineering",
      "degree": "Bachelor of Computer Science",
      "components": [
        {
          "name": "Computer Lab",
          "required": 1,
          "options": [
            {
              "id": "info411-lab-1",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Monday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "6.36-Computer Lab (Single Screen)",
                  "instructor": "Farhad Oroumchian"
                }
              ]
            },
            {
              "id": "info411-lab-2",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "08:30",
                  "endTime": "10:30",
                  "location": "3.47-Game Dev Lab Dual Screens",
                  "instructor": "Abdullah El Nokiti"
                }
              ]
            },
            {
              "id": "info411-lab-3",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Friday",
                  "startTime": "08:30",
                  "endTime": "10:30",
                  "location": "3.47-Game Dev Lab Dual Screens",
                  "instructor": "Abdullah El Nokiti"
                }
              ]
            }
          ]
        },
        {
          "name": "Lecture",
          "required": 1,
          "options": [
            {
              "id": "info411-lecture-1",
              "sessions": [
                {
                  "type": "Lecture",
                  "day": "Tuesday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "3.44-Classroom B",
                  "instructor": "Farhad Oroumchian"
                }
              ]
            }
          ]
        },
        {
          "name": "Tutorial",
          "required": 1,
          "options": [
            {
              "id": "info411-tutorial-1",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Monday",
                  "startTime": "09:30",
                  "endTime": "10:30",
                  "location": "5.10-Classroom B",
                  "instructor": "Farhad Oroumchian"
                }
              ]
            },
            {
              "id": "info411-tutorial-2",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Monday",
                  "startTime": "11:30",
                  "endTime": "12:30",
                  "location": "5.19-Classroom A",
                  "instructor": "Farhad Oroumchian"
                }
              ]
            },
            {
              "id": "info411-tutorial-3",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Monday",
                  "startTime": "12:30",
                  "endTime": "13:30",
                  "location": "5.19-Classroom A",
                  "instructor": "Farhad Oroumchian"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "code": "ISIT224",
      "name": "Management Information Systems",
      "faculty": "School of Engineering",
      "degree": "Bachelor of Computer Science, Bachelor of Business Information Systems",
      "components": [
        {
          "name": "Computer Lab",
          "required": 1,
          "options": [
            {
              "id": "isit224-lab-1",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Thursday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "4.42-Computer Lab (Single Screen)",
                  "instructor": "Pradnya Bhagwat"
                }
              ]
            },
            {
              "id": "isit224-lab-2",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Thursday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "4.42-Computer Lab (Single Screen)",
                  "instructor": "Pradnya Bhagwat"
                }
              ]
            },
            {
              "id": "isit224-lab-3",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Monday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "6.36-Computer Lab (Single Screen)",
                  "instructor": "Pradnya Bhagwat"
                }
              ]
            }
          ]
        },
        {
          "name": "Lecture",
          "required": 1,
          "options": [
            {
              "id": "isit224-lecture-1",
              "sessions": [
                {
                  "type": "Lecture",
                  "day": "Thursday",
                  "startTime": "08:30",
                  "endTime": "10:30",
                  "location": "4.44-Classroom B",
                  "instructor": "Zeenath Khan"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};