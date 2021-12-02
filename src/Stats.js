import { Doughnut } from "react-chartjs-2"

function Stats() {
  const colors = [
    "rgb(0, 0, 0)",
    "rgb(0, 0, 50)",
    "rgb(0, 0, 100)",
    "rgb(0, 0, 150)",
    "rgb(0, 0, 100)",
    "rgb(0, 0, 50)"
  ]

  let data = {
    labels: ["Midnight - 3:59 am", "4:00 - 7:59 am", "8:00 - 11:59 am", "Noon - 3:59 pm", "4:00 - 7:59 pm", "8:00 - 11:59 pm"],
    datasets: [
      {
        label: "Time of Day",
        data: [4430, 4307, 4050, 6078, 7174, 6956],
        backgroundColor: colors
      }
    ]
  }

  let options = {
    plugins: {
      title: {
        display: false
      },
      legend: {
        display: true,
        position: "left"
      }
    },
    responsive: true,
    maintainAspectRatio: false
  }

  return (
    <div id="stats-chart">
      <Doughnut data={data} options={options} width="500" height="500"/>
    </div>
  )
}

export default Stats;