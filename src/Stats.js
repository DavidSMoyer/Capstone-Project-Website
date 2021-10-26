import { Doughnut } from "react-chartjs-2"

function Stats() {
  const colors = [];
  for (let i = 0; i < 7; i++) {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    colors.push(`rgb(${r}, ${g}, ${b})`)
  }

  let data = {
    labels: ["Dataset", "Dataset", "Dataset", "Dataset", "Dataset", "Dataset", "Dataset"],
    datasets: [
      {
        label: "Crashes",
        data: [1, 2, 3, 4, 5, 6, 7],
        backgroundColor: colors
      }
    ]
  }

  let options = {
    plugins: {
      title: {
        display: true,
        text: "Crashes"
      },
      legend: {
        display: false
      }
    },
    responsive: false,
    maintainAspectRatio: false
  }

  return (
    <div id="stats-chart">
      <Doughnut data={data} options={options} width="500" height="500"/>
    </div>
  )
}

export default Stats;