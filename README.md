# Course Timetable Planner

A responsive and interactive tool to help university students plan their timetables by visualizing course schedules and managing potential time conflicts.

![Timetable Planner Overview](placeholder-for-main-screenshot.png)

## Features

- **Visual Timetable**: See all your selected classes laid out in a weekly schedule
- **Subject-Specific Colors**: Each subject uses a distinct color for easy identification
- **Conflict Detection**: Visual indicators for scheduling conflicts between sessions
- **Collapsible Subjects**: Save space with an accordion-style UI for subjects
- **Side-by-Side Display**: Overlapping classes display side-by-side rather than superimposed
- **Custom Color Selection**: Personalize the colors for each subject
- **Image Export**: Export your timetable as an image for sharing or printing

## Demo

### Selecting Classes
![Selecting Classes Demo](placeholder-for-selecting-classes.gif)

### Managing Conflicts
![Conflict Resolution Demo](placeholder-for-conflict-resolution.gif)

### Exporting Timetable
![Exporting Timetable Demo](placeholder-for-export.gif)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/timetable-chooser.git
   ```

2. Navigate to the project directory:
   ```
   cd timetable-chooser
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

## Usage

1. Browse through the list of subjects and their respective components
2. Click the checkboxes to select or deselect class sessions
3. View your selections automatically displayed on the timetable
4. Use the color picker to customize subject colors
5. Collapse subjects you've already configured to simplify the interface
6. Watch for conflict indicators (⚠️) to identify scheduling issues
7. Export your finished timetable as an image using the export button

## Technologies Used

- React.js
- Tailwind CSS
- HTML Canvas (for export functionality)
- Lodash (utility functions)

## Customizing Course Data

To use this planner with your own course data, modify the `src/data/courseData.js` file. The data structure should follow this format:

```javascript
export const courseData = {
  "subjects": [
    {
      "code": "SUBJ101",
      "name": "Subject Name",
      "faculty": "Faculty Name",
      "degree": "Applicable Degrees",
      // Optional: Use componentGroups to define related components that must be selected together
      "componentGroups": [
        {
          "groupType": "lecture_tutorial_group",
          "name": "Lecture and Tutorial Group",
          "description": "You must enroll in the same instructor's lecture and tutorial",
          "components": ["Lecture", "Tutorial"],
          "options": [
            { 
              "groupId": "group1", 
              "name": "Instructor A Group",
              "description": "Monday 10:30-12:30 (Lecture) & Wednesday 14:30-15:30 (Tutorial)",
              "instructorName": "Dr. Smith", 
              "ids": ["subj101-lecture-1", "subj101-tutorial-2"] 
            },
            { 
              "groupId": "group2", 
              "name": "Instructor B Group",
              "description": "Tuesday 13:30-15:30 (Lecture) & Thursday 09:30-10:30 (Tutorial)",
              "instructorName": "Dr. Jones", 
              "ids": ["subj101-lecture-2", "subj101-tutorial-1"] 
            }
          ]
        }
      ],
      "components": [
        {
          "name": "Lecture",
          "required": 1,
          "options": [
            {
              "id": "subj101-lecture-1",
              "sessions": [
                {
                  "type": "Lecture",
                  "day": "Monday",
                  "startTime": "10:30",
                  "endTime": "12:30",
                  "location": "Room 101",
                  "instructor": "Dr. Smith"
                }
              ]
            },
            {
              "id": "subj101-lecture-2",
              "sessions": [
                {
                  "type": "Lecture",
                  "day": "Tuesday",
                  "startTime": "13:30",
                  "endTime": "15:30",
                  "location": "Room 202",
                  "instructor": "Dr. Jones"
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
              "id": "subj101-tutorial-1",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Thursday",
                  "startTime": "09:30",
                  "endTime": "10:30",
                  "location": "Room 305",
                  "instructor": "Dr. Jones"
                }
              ]
            },
            {
              "id": "subj101-tutorial-2",
              "sessions": [
                {
                  "type": "Tutorial",
                  "day": "Wednesday",
                  "startTime": "14:30",
                  "endTime": "15:30",
                  "location": "Room 403",
                  "instructor": "Dr. Smith"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
```

### Important Notes on Component Groups

Component groups allow you to link related class sessions that should be selected together. For example:
- Lecture A and Lecture B taught by the same instructor
- Lecture and Tutorial taught by the same instructor
- Multiple lab sessions that must be taken as a group

When using component groups:
1. The `components` array lists the name of each component in the group
2. The `options` array provides different grouping choices
3. The `ids` array in each option MUST list component IDs in the same order as the `components` array
4. When a student selects any component in a group, all related components are automatically selected

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by the challenges of university timetable planning
- Created to make students' lives easier when organizing their class schedules
- Made with the help of Claude code