// This file defines all the subjects, components, and sessions available for scheduling.
// Format:
// - Each subject has a unique code, name, and faculty
// - Components are the class types (Lecture, Tutorial, Lab, etc.)
// - Components must be selected to complete enrollment
// - ComponentGroups define which components must be chosen together (i.e. same lecturer for both lecture sections)
// - For each component, options list the available sessions
// - In the componentGroups, use the "ids" array to link related options together

export const courseData = {
  "subjects": [
    {
      "code": "ARA101",
      "name": "Arabic for Beginners 1A",
      "faculty": "UOWD CS College",
      "degree": "Bachelor of Engineering (Honours), Bachelor of Computer Science, Bachelor of Business, Bachelor of Communication and Media, Bachelor of Business Information Systems, Bachelor of Psychological Science, University Freshman Year, Bachelor of Business Administration",
      "additionalInfo": "Tutorials start in week 1",
      "componentGroups": [
        {
          "groupType": "tutorial_group",
          "name": "Tutorial Group",
          "description": "Tutorial groups must be the same for both A and B sessions",
          "components": ["Tutorial A", "Tutorial B"],
          "options": [
            { 
              "groupId": "group1", 
              "name": "Group 1 (Nancy El Sobkey)",
              "description": "Monday 11:30-13:30 & Wednesday 11:30-13:30",
              "ids": ["ara101-tutorialA-1", "ara101-tutorialB-1"] 
            },
            { 
              "groupId": "group2", 
              "name": "Group 2 (Nancy El Sobkey)",
              "description": "Monday 14:30-16:30 & Wednesday 14:30-16:30",
              "ids": ["ara101-tutorialA-2", "ara101-tutorialB-2"] 
            },
            { 
              "groupId": "group3", 
              "name": "Group 3 (Katia Freywat)",
              "description": "Monday 9:30-11:30 & Thursday 9:30-11:30",
              "ids": ["ara101-tutorialA-3", "ara101-tutorialB-3"] 
            },
            { 
              "groupId": "group4", 
              "name": "Group 4 (Katia Freywat)",
              "description": "Monday 12:30-14:30 & Thursday 12:30-14:30",
              "ids": ["ara101-tutorialA-4", "ara101-tutorialB-4"] 
            }
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
      "code": "CSCI203",
      "name": "Algorithms and Data Structures",
      "faculty": "School of Computer Science",
      "degree": "Bachelor of Computer Science",
      "componentGroups": [
        {
          "groupType": "lecturer_group",
          "name": "Lecture Group",
          "description": "You must enroll in the same lecturer's sessions for both Lecture A and Lecture B",
          "components": ["Lecture A", "Lecture B"],
          "options": [
            { 
              "groupId": "abdellatif", 
              "name": "Abdellatif Tchantchane",
              "description": "Wednesday 12:30-14:30 (Lecture A) & Thursday 14:30-16:30 (Lecture B)",
              "instructorName": "Abdellatif Tchantchane", 
              "ids": ["csci203-lectureA-1", "csci203-lectureB-1"] 
            }
          ]
        }
      ],
      "components": [
        {
          "name": "Computer Lab",
          "required": 1,
          "options": [
            {
              "id": "csci203-lab-1",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Friday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "1.52-Computer Lab Single",
                  "instructor": "Priya Aswani"
                }
              ]
            },
            {
              "id": "csci203-lab-2",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Monday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "2.50-Computer Lab Single",
                  "instructor": "Priya Aswani"
                }
              ]
            },
            {
              "id": "csci203-lab-3",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Friday",
                  "startTime": "08:30",
                  "endTime": "10:30",
                  "location": "6.36-Computer Lab (Single Screen)",
                  "instructor": "Sara Majeed"
                }
              ]
            },
            {
              "id": "csci203-lab-4",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Friday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "4.42-Computer Lab (Single Screen)",
                  "instructor": "Sara Majeed"
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
              "id": "csci203-lectureA-1",
              "sessions": [
                {
                  "type": "Lecture A",
                  "day": "Wednesday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "6.345-Classroom A 6.34 & 6.35",
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
              "id": "csci203-lectureB-1",
              "sessions": [
                {
                  "type": "Lecture B",
                  "day": "Thursday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "5.11-Classroom B",
                  "instructor": "Abdellatif Tchantchane"
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
          "description": "You must enroll in the same lecturer's sessions for both Lecture A and Lecture B",
          "components": ["Lecture A", "Lecture B"],
          "options": [
            { 
              "groupId": "hclim", 
              "name": "HC Lim",
              "description": "Monday 8:30-10:30 & Wednesday 8:30-10:30",
              "instructorName": "HC Lim", 
              "ids": ["csci251-lectureA-1", "csci251-lectureB-1"] 
            },
            { 
              "groupId": "abdellatif1", 
              "name": "Abdellatif Tchantchane (Midday)",
              "description": "Monday 12:30-14:30 & Tuesday 12:30-14:30",
              "instructorName": "Abdellatif Tchantchane", 
              "ids": ["csci251-lectureA-2", "csci251-lectureB-2"] 
            },
            { 
              "groupId": "abdellatif2", 
              "name": "Abdellatif Tchantchane (Evening)",
              "description": "Monday 16:30-18:30 & Tuesday 16:30-18:30",
              "instructorName": "Abdellatif Tchantchane", 
              "ids": ["csci251-lectureA-3", "csci251-lectureB-3"] 
            }
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
      "code": "CSCI262",
      "name": "System Security",
      "faculty": "School of Engineering",
      "degree": "Bachelor of Computer Science",
      "componentGroups": [
        {
          "groupType": "lecturer_group",
          "name": "Lecture Group",
          "description": "You must enroll in the same lecturer's sessions for both Lecture A and Lecture B",
          "components": ["Lecture A", "Lecture B"],
          "options": [
            { 
              "groupId": "mouhannad", 
              "name": "Mouhannad Al Attar",
              "description": "Wednesday 10:30-12:30 (Lecture A) & Thursday 10:30-12:30 (Lecture B)",
              "instructorName": "Mouhannad Al Attar", 
              "ids": ["csci262-lectureA-1", "csci262-lectureB-1"] 
            }
          ]
        }
      ],
      "components": [
        {
          "name": "Computer Lab",
          "required": 1,
          "options": [
            {
              "id": "csci262-lab-1",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Thursday",
                  "startTime": "08:30",
                  "endTime": "10:30",
                  "location": "3.52-Computer Lab (Network)",
                  "instructor": "Tina Thomas"
                }
              ]
            },
            {
              "id": "csci262-lab-2",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Friday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "3.52-Computer Lab (Network)",
                  "instructor": "Suzan Sallam"
                }
              ]
            },
            {
              "id": "csci262-lab-3",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "3.52-Computer Lab (Network)",
                  "instructor": "Suzan Sallam"
                }
              ]
            },
            {
              "id": "csci262-lab-4",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Monday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "3.52-Computer Lab (Network)",
                  "instructor": "Suzan Sallam"
                }
              ]
            },
            {
              "id": "csci262-lab-5",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "08:30",
                  "endTime": "10:30",
                  "location": "3.52-Computer Lab (Network)",
                  "instructor": "Tina Thomas"
                }
              ]
            },
            {
              "id": "csci262-lab-6",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Friday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "3.52-Computer Lab (Network)",
                  "instructor": "Suzan Sallam"
                }
              ]
            },
            {
              "id": "csci262-lab-7",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Thursday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "3.52-Computer Lab (Network)",
                  "instructor": "Tina Thomas"
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
              "id": "csci262-lectureA-1",
              "sessions": [
                {
                  "type": "Lecture A",
                  "day": "Wednesday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "0.17-Lecture Theatre",
                  "instructor": "Mouhannad Al Attar"
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
              "id": "csci262-lectureB-1",
              "sessions": [
                {
                  "type": "Lecture B",
                  "day": "Thursday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "0.17-Lecture Theatre",
                  "instructor": "Mouhannad Al Attar"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "code": "CSCI323",
      "name": "Modern Artificial Intelligence",
      "faculty": "School of Computer Science",
      "degree": "Bachelor of Computer Science",
      "componentGroups": [
        {
          "groupType": "lecturer_group",
          "name": "Lecture Group",
          "description": "You must enroll in compatible sessions for both Lecture A and Lecture B",
          "components": ["Lecture A", "Lecture B"],
          "options": [
            { 
              "groupId": "patrick1", 
              "name": "Patrick Mukala 1",
              "description": "Tuesday 14:30-16:30 (Lecture A) & Wednesday 11:30-13:30 (Lecture B)",
              "instructorName": "Patrick Mukala", 
              "ids": ["csci323-lectureA-1", "csci323-lectureB-1"] 
            },
            { 
              "groupId": "patrick4", 
              "name": "Patrick Mukala 2",
              "description": "Tuesday 16:30-18:30 (Lecture A) & Wednesday 14:30-16:30 (Lecture B)",
              "instructorName": "Patrick Mukala", 
              "ids": ["csci323-lectureA-2", "csci323-lectureB-2"] 
            }
          ]
        }
      ],
      "components": [
        {
          "name": "Computer Lab",
          "required": 1,
          "options": [
            {
              "id": "csci323-lab-1",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Monday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "6.40-Computer Lab Single",
                  "instructor": "Obaid Ullah"
                }
              ]
            },
            {
              "id": "csci323-lab-2",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Monday",
                  "startTime": "08:30",
                  "endTime": "10:30",
                  "location": "6.40-Computer Lab Single",
                  "instructor": "Obaid Ullah"
                }
              ]
            },
            {
              "id": "csci323-lab-3",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Friday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "4.42-Computer Lab (Single Screen)",
                  "instructor": "Abdullah El Nokiti"
                }
              ]
            },
            {
              "id": "csci323-lab-4",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Friday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "5.15-MAC Lab",
                  "instructor": "Abdullah El Nokiti"
                }
              ]
            },
            {
              "id": "csci323-lab-5",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Thursday",
                  "startTime": "08:30",
                  "endTime": "10:30",
                  "location": "3.47-Game Dev Lab Dual Screens",
                  "instructor": "Abdullah El Nokiti"
                }
              ]
            },
            {
              "id": "csci323-lab-6",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Thursday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "1.52-Computer Lab Single",
                  "instructor": "Abdullah El Nokiti"
                }
              ]
            },
            {
              "id": "csci323-lab-7",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Thursday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "6.40-Computer Lab Single",
                  "instructor": "Abdullah El Nokiti"
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
              "id": "csci323-lectureA-1",
              "sessions": [
                {
                  "type": "Lecture A",
                  "day": "Tuesday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "3.44-Classroom B",
                  "instructor": "Patrick Mukala"
                }
              ]
            },
            {
              "id": "csci323-lectureA-2",
              "sessions": [
                {
                  "type": "Lecture A",
                  "day": "Tuesday",
                  "startTime": "16:30",
                  "endTime": "18:30",
                  "location": "5.134-Classroom A 5.13 & 5.14",
                  "instructor": "Patrick Mukala"
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
              "id": "csci323-lectureB-1",
              "sessions": [
                {
                  "type": "Lecture B",
                  "day": "Wednesday",
                  "startTime": "11:30",
                  "endTime": "13:30",
                  "location": "5.134-Classroom A 5.13 & 5.14",
                  "instructor": "Patrick Mukala"
                }
              ]
            },
            {
              "id": "csci323-lectureB-2",
              "sessions": [
                {
                  "type": "Lecture B",
                  "day": "Wednesday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "3.44-Classroom B",
                  "instructor": "Patrick Mukala"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "code": "CSCI346",
      "name": "Game Development",
      "faculty": "School of Engineering",
      "degree": "Bachelor of Computer Science",
      "componentGroups": [
        {
          "groupType": "instructor_group",
          "name": "Full Course Group",
          "description": "All components are taught by the same instructor",
          "components": ["Computer Lab", "Lecture", "Tutorial"],
          "options": [
            { 
              "groupId": "hclim", 
              "name": "HC Lim's Class",
              "description": "Monday 12:30-14:30 (Lab), Tuesday 12:30-14:30 (Lecture) & Monday 11:30-12:30 (Tutorial)",
              "instructorName": "HC Lim", 
              "ids": ["csci346-lab-1", "csci346-lecture-1", "csci346-tutorial-1"] 
            }
          ]
        }
      ],
      "components": [
        {
          "name": "Computer Lab",
          "required": 1,
          "options": [
            {
              "id": "csci346-lab-1",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Monday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "3.47-Game Dev Lab Dual Screens",
                  "instructor": "HC Lim"
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
              "id": "csci346-lecture-1",
              "sessions": [
                {
                  "type": "Lecture",
                  "day": "Tuesday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "6.39-Classroom A",
                  "instructor": "HC Lim"
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
              "id": "csci346-tutorial-1",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Monday",
                  "startTime": "11:30",
                  "endTime": "12:30",
                  "location": "5.12-Informal Classroom",
                  "instructor": "HC Lim"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "code": "CSCI350",
      "name": "Internship",
      "faculty": "School of Computer Science",
      "degree": "Bachelor of Computer Science",
      "components": [
        {
          "name": "Lecture",
          "required": 1,
          "options": [
            {
              "id": "csci350-lecture-1",
              "sessions": [
                {
                  "type": "Lecture",
                  "day": "Tuesday",
                  "startTime": "10:30",
                  "endTime": "11:30",
                  "location": "5.10-Classroom B",
                  "instructor": "Halim Khelaifa"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "code": "CSCI388",
      "name": "Virtual and Augmented Reality",
      "faculty": "School of Engineering",
      "degree": "Bachelor of Computer Science",
      "componentGroups": [
        {
          "groupType": "lecture_lab_tutorial_group",
          "name": "Course Components Group",
          "description": "Components are taught by different instructors but must be taken together",
          "components": ["Computer Lab", "Lecture", "Tutorial"],
          "options": [
            { 
              "groupId": "vr_group", 
              "name": "VR/AR Class",
              "description": "Thursday 12:30-14:30 (Lab), Wednesday 10:30-12:30 (Lecture) & Tuesday 15:30-16:30 (Tutorial)",
              "instructorName": "Mixed Instructors", 
              "ids": ["csci388-lab-1", "csci388-lecture-1", "csci388-tutorial-1"] 
            }
          ]
        }
      ],
      "components": [
        {
          "name": "Computer Lab",
          "required": 1,
          "options": [
            {
              "id": "csci388-lab-1",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Thursday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "3.47-Game Dev Lab Dual Screens",
                  "instructor": "Tauqeer Faiz"
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
              "id": "csci388-lecture-1",
              "sessions": [
                {
                  "type": "Lecture",
                  "day": "Wednesday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "6.39-Classroom A",
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
              "id": "csci388-tutorial-1",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Tuesday",
                  "startTime": "15:30",
                  "endTime": "16:30",
                  "location": "4.45-Classroom B",
                  "instructor": "Tauqeer Faiz"
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
      "faculty": "School of Computer Science",
      "degree": "Bachelor of Computer Science",
      "componentGroups": [
        {
          "groupType": "lecture_tutorial_group",
          "name": "Lecture and Tutorial Group",
          "description": "You must enroll in the same instructor's lecture and tutorial",
          "components": ["Lecture", "Tutorial"],
          "options": [
          
          ]
        }
      ],
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
      "componentGroups": [
        {
          "groupType": "lecture_tutorial_lab_group",
          "name": "Lecture, Tutorial and Lab Group",
          "description": "You must enroll in matched instructor sections",
          "components": ["Lecture", "Tutorial", "Computer Lab"],
          "options": [
            
          ]
        }
      ],
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
      "code": "CSIT114",
      "name": "System Analysis",
      "faculty": "School of Computer Science",
      "degree": "Bachelor of Computer Science, Bachelor of Business Information Systems",
      "componentGroups": [
        {
          "groupType": "instructor_group",
          "name": "Instructor Group",
          "description": "Lab sections are grouped by instructor",
          "components": ["Computer Lab"],
          "options": [
            { 
              "groupId": "zeenath", 
              "name": "Zeenath Khan's Labs",
              "instructorName": "Zeenath Khan", 
              "ids": ["csit114-lab-1", "csit114-lab-2"] 
            },
            { 
              "groupId": "sara", 
              "name": "Sara Azeem Khan's Labs",
              "instructorName": "Sara Azeem Khan", 
              "ids": ["csit114-lab-3"] 
            },
            { 
              "groupId": "priya", 
              "name": "Priya Aswani's Labs",
              "instructorName": "Priya Aswani", 
              "ids": ["csit114-lab-4", "csit114-lab-5", "csit114-lab-6", "csit114-lab-7"] 
            }
          ]
        }
      ],
      "components": [
        {
          "name": "Computer Lab",
          "required": 1,
          "options": [
            {
              "id": "csit114-lab-1",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Friday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "6.36-Computer Lab (Single Screen)",
                  "instructor": "Zeenath Khan"
                }
              ]
            },
            {
              "id": "csit114-lab-2",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Thursday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "2.50-Computer Lab Single",
                  "instructor": "Zeenath Khan"
                }
              ]
            },
            {
              "id": "csit114-lab-3",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Monday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "6.40-Computer Lab Single",
                  "instructor": "Sara Azeem Khan"
                }
              ]
            },
            {
              "id": "csit114-lab-4",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Monday",
                  "startTime": "16:30",
                  "endTime": "18:30",
                  "location": "6.40-Computer Lab Single",
                  "instructor": "Priya Aswani"
                }
              ]
            },
            {
              "id": "csit114-lab-5",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "16:30",
                  "endTime": "18:30",
                  "location": "6.40-Computer Lab Single",
                  "instructor": "Priya Aswani"
                }
              ]
            },
            {
              "id": "csit114-lab-6",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "6.40-Computer Lab Single",
                  "instructor": "Priya Aswani"
                }
              ]
            },
            {
              "id": "csit114-lab-7",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Friday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "1.52-Computer Lab Single",
                  "instructor": "Priya Aswani"
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
              "id": "csit114-lecture-1",
              "sessions": [
                {
                  "type": "Lecture",
                  "day": "Friday",
                  "startTime": "09:30",
                  "endTime": "12:30",
                  "location": "0.17-Lecture Theatre",
                  "instructor": "Zeenath Khan"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "code": "CSIT115",
      "name": "Data Management and Security",
      "faculty": "School of Computer Science",
      "degree": ["Bachelor of Computer Science", "Bachelor of Business Information Systems"],
      "components": [
        {
          "name": "Computer Lab",
          "required": 1,
          "options": [
            {
              "id": "csit115-lab-1",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "3.52-Computer Lab (Network)",
                  "instructor": "Asma Damankesh"
                }
              ]
            },
            {
              "id": "csit115-lab-2",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Monday",
                  "startTime": "16:30",
                  "endTime": "18:30",
                  "location": "2.50-Computer Lab Single",
                  "instructor": "Asma Damankesh"
                }
              ]
            },
            {
              "id": "csit115-lab-3",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "3.47-Game Dev Lab Dual Screens",
                  "instructor": "Asma Damankesh"
                }
              ]
            },
            {
              "id": "csit115-lab-4",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "6.36-Computer Lab (Single Screen)",
                  "instructor": "Asma Damankesh"
                }
              ]
            },
            {
              "id": "csit115-lab-5",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "16:30",
                  "endTime": "18:30",
                  "location": "2.50-Computer Lab Single",
                  "instructor": "Nkqubela Ruxwana"
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
              "id": "csit115-lecture-1",
              "sessions": [
                {
                  "type": "Lecture",
                  "day": "Thursday",
                  "startTime": "09:30",
                  "endTime": "12:30",
                  "location": "3.44-Classroom B",
                  "instructor": "Nkqubela Ruxwana"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "code": "CSIT121",
      "name": "Object Oriented Design and Programming",
      "faculty": "School of Computer Science",
      "degree": ["Bachelor of Computer Science", "Bachelor of Business Information Systems"],
      "components": [
        {
          "name": "Computer Lab",
          "required": 1,
          "options": [
            {
              "id": "csit121-lab-1",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Tuesday",
                  "startTime": "16:30",
                  "endTime": "18:30",
                  "location": "6.36-Computer Lab (Single Screen)",
                  "instructor": "Omar Daoudi"
                }
              ]
            },
            {
              "id": "csit121-lab-2",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "6.40-Computer Lab Single",
                  "instructor": "Omar Daoudi"
                }
              ]
            },
            {
              "id": "csit121-lab-3",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "16:30",
                  "endTime": "18:30",
                  "location": "1.52-Computer Lab Single",
                  "instructor": "Omar Daoudi"
                }
              ]
            },
            {
              "id": "csit121-lab-4",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "08:30",
                  "endTime": "10:30",
                  "location": "2.50-Computer Lab Single",
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
              "id": "csit121-lecture-1",
              "sessions": [
                {
                  "type": "Lecture",
                  "day": "Thursday",
                  "startTime": "13:30",
                  "endTime": "16:30",
                  "location": "3.44-Classroom B",
                  "instructor": "Farhad Oroumchian"
                }
              ]
            }
          ]
        }
      ]
    }, 
    {
      "code": "CSIT127",
      "name": "Networks and Communications",
      "faculty": "School of Computer Science",
      "degree": ["Bachelor of Computer Science", "Bachelor of Business Information Systems"],
      "components": [
        {
          "name": "Computer Lab",
          "required": 1,
          "options": [
            {"id": "csit127-lab-1", "sessions": [{"type": "Computer Lab", "day": "Wednesday", "startTime": "14:30", "endTime": "16:30", "location": "2.50-Computer Lab Single", "instructor": "Pradnya Bhagwat"}]},
            {"id": "csit127-lab-2", "sessions": [{"type": "Computer Lab", "day": "Wednesday", "startTime": "14:30", "endTime": "16:30", "location": "3.52-Computer Lab (Network)", "instructor": "Akanksha Singh"}]},
            {"id": "csit127-lab-3", "sessions": [{"type": "Computer Lab", "day": "Tuesday", "startTime": "14:30", "endTime": "16:30", "location": "2.50-Computer Lab Single", "instructor": "Omar Daoudi"}]},
            {"id": "csit127-lab-4", "sessions": [{"type": "Computer Lab", "day": "Friday", "startTime": "10:30", "endTime": "12:30", "location": "2.50-Computer Lab Single", "instructor": "Pradnya Bhagwat"}]},
            {"id": "csit127-lab-5", "sessions": [{"type": "Computer Lab", "day": "Tuesday", "startTime": "16:30", "endTime": "18:30", "location": "2.50-Computer Lab Single", "instructor": "Asma Damankesh"}]},
            {"id": "csit127-lab-6", "sessions": [{"type": "Computer Lab", "day": "Wednesday", "startTime": "10:30", "endTime": "12:30", "location": "6.40-Computer Lab Single", "instructor": "Omar Daoudi"}]}
          ]
        },
        {"name": "Lecture", "required": 1, "options": [{"id": "csit127-lecture-1", "sessions": [{"type": "Lecture", "day": "Thursday", "startTime": "13:30", "endTime": "16:30", "location": "3.44-Classroom B", "instructor": "Farhad Oroumchian"}]}]}
      ]
    }, 
    {
      "code": "CSIT128",
      "name": "Introduction to Web Technology",
      "faculty": "School of Computer Science",
      "degree": ["Bachelor of Computer Science", "Bachelor of Business Information Systems"],
      "components": [
        {
          "name": "Computer Lab",
          "required": 1,
          "options": [
            {"id": "csit128-lab-1", "sessions": [{"type":"Computer Lab","day":"Wednesday","startTime":"12:30","endTime":"14:30","location":"3.47-Game Dev Lab Dual Screens","instructor":"Shahrul Sah"}]},
            {"id": "csit128-lab-2", "sessions": [{"type":"Computer Lab","day":"Monday","startTime":"16:30","endTime":"18:30","location":"3.47-Game Dev Lab Dual Screens","instructor":"Shahrul Sah"}]},
            {"id": "csit128-lab-3", "sessions": [{"type":"Computer Lab","day":"Monday","startTime":"18:30","endTime":"20:30","location":"3.47-Game Dev Lab Dual Screens","instructor":"Shahrul Sah"}]},
            {"id": "csit128-lab-4", "sessions": [{"type":"Computer Lab","day":"Thursday","startTime":"10:30","endTime":"12:30","location":"5.15-MAC Lab","instructor":"Shahrul Sah"}]},
            {"id": "csit128-lab-5", "sessions": [{"type":"Computer Lab","day":"Monday","startTime":"14:30","endTime":"16:30","location":"3.47-Game Dev Lab Dual Screens","instructor":"Shahrul Sah"}]},
            {"id": "csit128-lab-6", "sessions": [{"type":"Computer Lab","day":"Monday","startTime":"18:30","endTime":"20:30","location":"1.52-Computer Lab Single","instructor":"Sonia Dagou"}]},
            {"id": "csit128-lab-7", "sessions": [{"type":"Computer Lab","day":"Wednesday","startTime":"10:30","endTime":"12:30","location":"3.47-Game Dev Lab Dual Screens","instructor":"Sonia Dagou"}]},
            {"id": "csit128-lab-8", "sessions": [{"type":"Computer Lab","day":"Wednesday","startTime":"08:30","endTime":"10:30","location":"3.47-Game Dev Lab Dual Screens","instructor":"Tauqeer Faiz"}]},
            {"id": "csit128-lab-9", "sessions": [{"type":"Computer Lab","day":"Monday","startTime":"16:30","endTime":"18:30","location":"1.52-Computer Lab Single","instructor":"Sonia Dagou"}]},
            {"id": "csit128-lab-10", "sessions": [{"type":"Computer Lab","day":"Monday","startTime":"14:30","endTime":"16:30","location":"2.50-Computer Lab Single","instructor":"Sara Azeem Khan"}]},
            {"id": "csit128-lab-11", "sessions": [{"type":"Computer Lab","day":"Monday","startTime":"18:30","endTime":"20:30","location":"6.36-Computer Lab (Single Screen)","instructor":"Sara Azeem Khan"}]},
            {"id": "csit128-lab-12", "sessions": [{"type":"Computer Lab","day":"Monday","startTime":"18:30","endTime":"20:30","location":"4.42-Computer Lab (Single Screen)","instructor":"Sara Majeed"}]},
            {"id": "csit128-lab-13", "sessions": [{"type":"Computer Lab","day":"Monday","startTime":"12:30","endTime":"14:30","location":"1.52-Computer Lab Single","instructor":"Deepa Keshavamurthy"}]},
            {"id": "csit128-lab-14", "sessions": [{"type":"Computer Lab","day":"Wednesday","startTime":"14:30","endTime":"16:30","location":"3.47-Game Dev Lab Dual Screens","instructor":"Deepa Keshavamurthy"}]}
          ]
        },
        {
          "name": "Lecture",
          "required": 1,
          "options": [
            {"id":"csit128-lecture-1","sessions":[{"type":"Lecture","day":"Monday","startTime":"08:30","endTime":"10:30","location":"0.17-Lecture Theatre","instructor":"Haitham Yaish"}]},
            {"id":"csit128-lecture-2","sessions":[{"type":"Lecture","day":"Tuesday","startTime":"14:30","endTime":"16:30","location":"0.17-Lecture Theatre","instructor":"Haitham Yaish"}]},
            {"id":"csit128-lecture-3","sessions":[{"type":"Lecture","day":"Monday","startTime":"10:30","endTime":"12:30","location":"4.44-Classroom B","instructor":"Soly Mathew"}]},
            {"id":"csit128-lecture-4","sessions":[{"type":"Lecture","day":"Tuesday","startTime":"08:30","endTime":"10:30","location":"4.44-Classroom B","instructor":"Soly Mathew"}]}
          ]
        },
        {
          "name": "Tutorial",
          "required": 1,
          "options": [
            {"id":"csit128-tut-1","sessions":[{"type":"Tutorial","day":"Wednesday","startTime":"15:30","endTime":"16:30","location":"3.45-Classroom B","instructor":"Tauqeer Faiz"}]},
            {"id":"csit128-tut-2","sessions":[{"type":"Tutorial","day":"Monday","startTime":"16:30","endTime":"17:30","location":"5.12-Informal Classroom","instructor":"Tauqeer Faiz"}]},
            {"id":"csit128-tut-3","sessions":[{"type":"Tutorial","day":"Wednesday","startTime":"13:30","endTime":"14:30","location":"3.42-Classroom B","instructor":"Tauqeer Faiz"}]}
          ]
        }
      ]
    },    
    {
      "code": "CSIT314",
      "name": "Software Development Methodologies",
      "faculty": "School of Computer Science",
      "degree": "Bachelor of Computer Science, Bachelor of Business Information Systems",
      "componentGroups": [
        {
          "groupType": "lecture_tutorial_lab_group",
          "name": "Lecture, Tutorial and Lab Group",
          "description": "You must enroll in compatible time slots",
          "components": ["Lecture", "Tutorial", "Computer Lab"],
          "options": [
            
          ]
        }
      ],
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
      "code": "GEOG222",
      "name": "Society and Environment: Resources, Challenges, Futures",
      "faculty": "School of Humanities, Social Sciences and Health",
      "degree": [
        "Bachelor of Engineering (Honours)",
        "Bachelor of Computer Science",
        "Bachelor of Business",
        "Bachelor of Communication and Media",
        "Bachelor of Business Information Systems",
        "Bachelor of Psychological Science",
        "Bachelor of Business Administration"
      ],
      "components": [
        {
          "name": "Lecture",
          "required": 1,
          "options": [
            {
              "id": "geog222-lecture-1",
              "sessions": [
                {
                  "type": "Lecture",
                  "day": "Tuesday",
                  "startTime": "09:30",
                  "endTime": "11:30",
                  "location": "3.46-Classroom A",
                  "instructor": "Amina Khan"
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
              "id": "geog222-tutorial-1",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Tuesday",
                  "startTime": "11:30",
                  "endTime": "13:30",
                  "location": "4.48-Classroom B",
                  "instructor": "Amina Khan"
                }
              ]
            },
            {
              "id": "geog222-tutorial-2",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Wednesday",
                  "startTime": "09:30",
                  "endTime": "11:30",
                  "location": "4.50-Classroom B",
                  "instructor": "Amina Khan"
                }
              ]
            }
          ]
        }
      ]
    },    
    {
      "code": "CSIT321",
      "name": "Project",
      "faculty": "School of Computer Science",
      "degree": ["Bachelor of Business Information Systems", "Bachelor of Computer Science", "Bachelor of Business Information Systems"],
      "componentGroups": [
        {
          "groupType": "lecturer_group",
          "name": "Lecture Group",
          "description": "You must enrol in compatible sessions for both Lecture A and Lecture B",
          "components": ["Lecture A", "Lecture B"],
          "options": [
            { 
              "groupId": "group1", 
              "name": "Farhad Oroumchian Option",
              "description": "Tuesday 13:30-15:30 (Lecture A) & Friday 10:30-12:30 (Lecture B)",
              "instructorName": "Farhad Oroumchian", 
              "ids": ["csit321-lectureA-1", "csit321-lectureB-1"] 
            },
            {
              "groupId": "patrick1", 
              "name": "Patrick Mukala - Evening Option",
              "description": "Monday 16:30-18:30 (Lecture A) & Wednesday 16:30-18:30 (Lecture B)",
              "instructorName": "Patrick Mukala", 
              "ids": ["csit321-lectureA-2", "csit321-lectureB-2"] 
            }
          ]
        }
      ],
      "components": [
        {
          "name": "Lecture A",
          "required": 1,
          "options": [
            {
              "id": "csit321-lectureA-1",
              "sessions": [
                {
                  "type": "Lecture A",
                  "day": "Tuesday",
                  "startTime": "13:30",
                  "endTime": "15:30",
                  "location": "4.44-Classroom B",
                  "instructor": "Farhad Oroumchian"
                }
              ]
            },
            {
              "id": "csit321-lectureA-2",
              "sessions": [
                {
                  "type": "Lecture A",
                  "day": "Monday",
                  "startTime": "16:30",
                  "endTime": "18:30",
                  "location": "3.44-Classroom B",
                  "instructor": "Patrick Mukala"
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
              "id": "csit321-lectureB-1",
              "sessions": [
                {
                  "type": "Lecture B",
                  "day": "Friday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "3.44-Classroom B",
                  "instructor": "Farhad Oroumchian"
                }
              ]
            },
            {
              "id": "csit321-lectureB-2",
              "sessions": [
                {
                  "type": "Lecture B",
                  "day": "Wednesday",
                  "startTime": "16:30",
                  "endTime": "18:30",
                  "location": "3.44-Classroom B",
                  "instructor": "Patrick Mukala"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "code": "IRAE135",
      "name": "UAE and International Relations",
      "faculty": "School of Humanities, Social Sciences and Health",
      "degree": [
        "Bachelor of Engineering (Honours)",
        "Bachelor of Computer Science",
        "Bachelor of Business",
        "Bachelor of Communication and Media",
        "Bachelor of Business Information Systems",
        "Bachelor of Psychological Science",
        "Bachelor of Business Administration"
      ],
      "components": [
        {
          "name": "Lecture",
          "required": 1,
          "options": [
            {
              "id": "irae135-lecture-1",
              "sessions": [
                {
                  "type": "Lecture",
                  "day": "Tuesday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "5.11-Classroom B",
                  "instructor": "Imene Ajala"
                }
              ]
            },
            {
              "id": "irae135-lecture-2",
              "sessions": [
                {
                  "type": "Lecture",
                  "day": "Tuesday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "5.11-Classroom B",
                  "instructor": "Imene Ajala"
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
              "id": "irae135-tutorial-1",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Thursday",
                  "startTime": "08:30",
                  "endTime": "10:30",
                  "location": "4.52-Classroom A",
                  "instructor": "IRAE135 - Adjunct1"
                }
              ]
            },
            {
              "id": "irae135-tutorial-2",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Wednesday",
                  "startTime": "08:30",
                  "endTime": "10:30",
                  "location": "5.17-Classroom VC",
                  "instructor": "IRAE135 - Adjunct1"
                }
              ]
            },
            {
              "id": "irae135-tutorial-3",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Wednesday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "4.52-Classroom A",
                  "instructor": "IRAE135 - Adjunct1"
                }
              ]
            },
            {
              "id": "irae135-tutorial-4",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Thursday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "4.48-Classroom B",
                  "instructor": "IRAE135 - Adjunct1"
                }
              ]
            },
            {
              "id": "irae135-tutorial-5",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Wednesday",
                  "startTime": "11:30",
                  "endTime": "13:30",
                  "location": "5.19-Classroom A",
                  "instructor": "IRAE135 - Adjunct2"
                }
              ]
            },
            {
              "id": "irae135-tutorial-6",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Wednesday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "5.11-Classroom B",
                  "instructor": "IRAE135 - Adjunct2"
                }
              ]
            },
            {
              "id": "irae135-tutorial-7",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Thursday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "4.45-Classroom B",
                  "instructor": "IRAE135 - Adjunct2"
                }
              ]
            },
            {
              "id": "irae135-tutorial-8",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Thursday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "4.45-Classroom B",
                  "instructor": "IRAE135 - Adjunct2"
                }
              ]
            },
            {
              "id": "irae135-tutorial-9",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Friday",
                  "startTime": "08:30",
                  "endTime": "10:30",
                  "location": "3.42-Classroom B",
                  "instructor": "IRAE135 - Adjunct3"
                }
              ]
            },
            {
              "id": "irae135-tutorial-10",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Friday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "3.42-Classroom B",
                  "instructor": "IRAE135 - Adjunct3"
                }
              ]
            },
            {
              "id": "irae135-tutorial-11",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Friday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "5.12-Informal Classroom",
                  "instructor": "IRAE135 - Adjunct3"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "code": "PUBH115",
      "name": "Public Health",
      "faculty": "School of Humanities, Social Sciences and Health",
      "degree": [
        "Bachelor of Engineering (Honours)",
        "Bachelor of Computer Science",
        "Bachelor of Business",
        "Bachelor of Communication and Media",
        "Bachelor of Business Information Systems",
        "Bachelor of Psychological Science",
        "Bachelor of Business Administration"
      ],
      "components": [
        {
          "name": "Lecture",
          "required": 1,
          "options": [
            {
              "id": "pubh115-lecture-1",
              "sessions": [
                {
                  "type": "Lecture",
                  "day": "Thursday",
                  "startTime": "08:30",
                  "endTime": "10:30",
                  "location": "0.17-Lecture Theatre",
                  "instructor": "Amina Khan"
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
              "id": "pubh115-tutorial-1",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Thursday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "3.46-Classroom A",
                  "instructor": "Amina Khan"
                }
              ]
            },
            {
              "id": "pubh115-tutorial-2",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Thursday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "3.46-Classroom A",
                  "instructor": "Amina Khan"
                }
              ]
            },
            {
              "id": "pubh115-tutorial-3",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Thursday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "4.48-Classroom B",
                  "instructor": "Noor Suwwan"
                }
              ]
            },
            {
              "id": "pubh115-tutorial-4",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Thursday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "5.17-Classroom VC",
                  "instructor": "Noor Suwwan"
                }
              ]
            },
            {
              "id": "pubh115-tutorial-5",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Friday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "4.50-Classroom B",
                  "instructor": "Noor Suwwan"
                }
              ]
            },
            {
              "id": "pubh115-tutorial-6",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Friday",
                  "startTime": "08:30",
                  "endTime": "10:30",
                  "location": "4.50-Classroom B",
                  "instructor": "Noor Suwwan"
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
      "faculty": "School of Computer Science",
      "degree": "Bachelor of Computer Science",
      "componentGroups": [
        {
          "groupType": "lecture_tutorial_lab_group",
          "name": "Lecture, Tutorial and Lab Group",
          "description": "You must enroll in compatible sessions with the same instructor",
          "components": ["Lecture", "Tutorial", "Computer Lab"],
          "options": [
            
          ]
        }
      ],
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
      "code": "MATH255",
      "name": "Mathematics for Computing",
      "faculty": "School of Computer Science",
      "degree": ["Bachelor of Computer Science", "Bachelor of Business Information Systems"],
      "componentGroups": [
        {
          "groupType": "lecturer_group",
          "name": "Lecture Group",
          "description": "You must enrol in compatible sessions for both Lecture A and Lecture B",
          "components": ["Lecture A", "Lecture B"],
          "options": [
            {
              "groupId": "math255-group1",
              "name": "Halim Khelalfa Lecture Option",
              "description": "Monday 12:30-14:30 (Lecture A) & Tuesday 08:30-10:30 (Lecture B)",
              "instructorName": "Halim Khelalfa",
              "ids": ["math255-lectureA-1", "math255-lectureB-1"]
            }
          ]
        }
      ],
      "components": [
        {
          "name": "Computer Lab",
          "required": 1,
          "options": [
            {
              "id": "math255-lab-1",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Thursday",
                  "startTime": "18:30",
                  "endTime": "20:30",
                  "location": "4.52-Classroom A",
                  "instructor": "Mohamad Klot"
                }
              ]
            },
            {
              "id": "math255-lab-2",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "18:30",
                  "endTime": "20:30",
                  "location": "5.12-Informal Classroom",
                  "instructor": "Mohamad Klot"
                }
              ]
            },
            {
              "id": "math255-lab-3",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "09:30",
                  "endTime": "11:30",
                  "location": "3.42-Classroom B",
                  "instructor": "Halim Khelalfa"
                }
              ]
            },
            {
              "id": "math255-lab-4",
              "sessions": [
                {
                  "type": "Computer Lab",
                  "day": "Wednesday",
                  "startTime": "14:30",
                  "endTime": "16:30",
                  "location": "5.17-Classroom VC",
                  "instructor": "Halim Khelalfa"
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
              "id": "math255-lectureA-1",
              "sessions": [
                {
                  "type": "Lecture A",
                  "day": "Monday",
                  "startTime": "12:30",
                  "endTime": "14:30",
                  "location": "3.44-Classroom B",
                  "instructor": "Halim Khelalfa"
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
              "id": "math255-lectureB-1",
              "sessions": [
                {
                  "type": "Lecture B",
                  "day": "Tuesday",
                  "startTime": "08:30",
                  "endTime": "10:30",
                  "location": "3.44-Classroom B",
                  "instructor": "Halim Khelalfa"
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
      "faculty": "School of Computer Science",
      "degree": "Bachelor of Computer Science, Bachelor of Business Information Systems",
      "componentGroups": [
        {
          "groupType": "lecture_lab_group",
          "name": "Lecture and Lab Group",
          "description": "You must choose a lab session that coordinates with the lecture",
          "components": ["Lecture", "Computer Lab"],
          "options": [
            { 
              "groupId": "zeenath_morning", 
              "name": "Morning Session",
              "description": "Thursday 08:30-10:30 (Lecture) & Monday 10:30-12:30 (Lab)",
              "instructorName": "Zeenath Khan / Pradnya Bhagwat", 
              "ids": ["isit224-lecture-1", "isit224-lab-3"] 
            },
            { 
              "groupId": "zeenath_afternoon", 
              "name": "Afternoon Session",
              "description": "Thursday 08:30-10:30 (Lecture) & Thursday 12:30-14:30 (Lab)",
              "instructorName": "Zeenath Khan / Pradnya Bhagwat", 
              "ids": ["isit224-lecture-1", "isit224-lab-1"] 
            },
            { 
              "groupId": "zeenath_late", 
              "name": "Late Afternoon Session",
              "description": "Thursday 08:30-10:30 (Lecture) & Thursday 14:30-16:30 (Lab)",
              "instructorName": "Zeenath Khan / Pradnya Bhagwat", 
              "ids": ["isit224-lecture-1", "isit224-lab-2"] 
            }
          ]
        }
      ],
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
        },
        {
          "name": "Tutorial",
          "required": 0,
          "options": []
        }
      ]
    }
  ]
};