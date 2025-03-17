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

To use this planner with your own course data, modify the `courseData.json` file in the root directory. The data structure should follow this format:

```json
[
  {
    "id": "subject1",
    "name": "Subject Name",
    "components": [
      {
        "id": "component1",
        "name": "Component Name",
        "sessions": [
          {
            "id": "session1",
            "day": "Monday",
            "start": "10:00",
            "end": "12:00",
            "location": "Room 101"
          }
        ]
      }
    ]
  }
]
```

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