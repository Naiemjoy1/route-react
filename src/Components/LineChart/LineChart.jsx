import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const mathMarksData = [
        { id: 1,    name: 'Alice',    math: 85, physics: 78, chemistry: 90 },
        { id: 2,    name: 'Bob',      math: 75, physics: 72, chemistry: 85 },
        { id: 3,    name: 'Charlie',  math: 90, physics: 88, chemistry: 92 },
        { id: 4,    name: 'David',    math: 70, physics: 65, chemistry: 75 },
        { id: 5,    name: 'Eva',      math: 80, physics: 75, chemistry: 85 },
        { id: 6,    name: 'Frank',    math: 65, physics: 60, chemistry: 70 },
        { id: 7,    name: 'Grace',    math: 95, physics: 92, chemistry: 98 },
        { id: 8,    name: 'Hannah',   math: 78, physics: 80, chemistry: 85 },
        { id: 9,    name: 'Ian',      math: 88, physics: 85, chemistry: 90 },
        { id: 10,   name: 'Julia',    math: 82, physics: 80, chemistry: 88 }
      ];
      

    return (
        <div>
            <LChart width={800} height={400} data={mathMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis ></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={'physics'} stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;