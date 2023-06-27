import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const subjectData = {
  math: [
    { month: "Jan", marks: 90 },
    { month: "Feb", marks: 85 },
    { month: "Mar", marks: 95 },
    { month: "Apr", marks: 80 },
    { month: "May", marks: 88 },
    { month: "Jun", marks: 92 },
    { month: "Jul", marks: 87 },
    { month: "Aug", marks: 93 },
    { month: "Sep", marks: 91 },
    { month: "Oct", marks: 89 },
    { month: "Nov", marks: 94 },
    { month: "Dec", marks: 88 },
  ],
  science: [
    { month: "Jan", marks: 80 },
    { month: "Feb", marks: 75 },
    { month: "Mar", marks: 85 },
    { month: "Apr", marks: 82 },
    { month: "May", marks: 87 },
    { month: "Jun", marks: 90 },
    { month: "Jul", marks: 85 },
    { month: "Aug", marks: 92 },
    { month: "Sep", marks: 88 },
    { month: "Oct", marks: 90 },
    { month: "Nov", marks: 83 },
    { month: "Dec", marks: 86 },
  ],
  history: [
    { month: "Jan", marks: 70 },
    { month: "Feb", marks: 75 },
    { month: "Mar", marks: 80 },
    { month: "Apr", marks: 78 },
    { month: "May", marks: 83 },
    { month: "Jun", marks: 81 },
    { month: "Jul", marks: 75 },
    { month: "Aug", marks: 82 },
    { month: "Sep", marks: 79 },
    { month: "Oct", marks: 85 },
    { month: "Nov", marks: 77 },
    { month: "Dec", marks: 79 },
  ],
};

const calculateAverageMarks = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const averageData = months.map((month) => {
    const marks = Object.values(subjectData).flatMap((subjectMarks) =>
      subjectMarks
        .filter((data) => data.month === month)
        .map((data) => data.marks)
    );
    const sum = marks.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const average = marks.length > 0 ? sum / marks.length : 0;

    return {
      month,
      average: Math.round(average),
    };
  });

  return averageData;
};

const Newgraph = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [showAverageGraph, setShowAverageGraph] = useState(false);

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setShowAverageGraph(false);
  };

  const handleToggleAverageGraph = () => {
    setShowAverageGraph(!showAverageGraph);
  };

  const renderBarGraph = () => {
    if (selectedSubject === "") {
      return <div>Please select a subject.</div>;
    }

    const data = subjectData[selectedSubject];

    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="marks" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  const renderAverageGraph = () => {
    if (!showAverageGraph) {
      return null;
    }

    const averageData = calculateAverageMarks();

    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={averageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="average" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <Button variant="contained" onClick={() => handleSubjectClick("math")}>
          Physics
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          onClick={() => handleSubjectClick("science")}
        >
          Chemistry
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          onClick={() => handleSubjectClick("history")}
        >
          Mathematics
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={handleToggleAverageGraph}>
          Show Average
        </Button>
      </Grid>
      <Grid item xs={12}>
        {renderBarGraph()}
      </Grid>
      <Grid item xs={12}>
        {showAverageGraph && renderAverageGraph()}
      </Grid>
    </Grid>
  );
};

export default Newgraph;
