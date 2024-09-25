import { memo } from "react";
import { Pie } from "react-chartjs-2";
import { Fish, Lake } from "../../data/statistic";
import { Chart as ChartJS, Tooltip, ArcElement } from "chart.js";
type Props = {
    fishesList: Fish[]
    optionValue: Lake | string
}

ChartJS.register(ArcElement, Tooltip);

const PieChart: React.FC<Props> = memo(({ fishesList, optionValue }) => {
    const originalArray = typeof optionValue == 'object' ? fishesList.filter((fish) => fish.lakeName === optionValue.lakeName).map((fish) => fish.fishName) : null
    const mappedArray = []
    let fishString = ''

    for (let i = 0; i < originalArray!.length; i++) {
        if (fishString !== originalArray!.sort()[i]) {
            fishString = originalArray![i]
            mappedArray.push(originalArray!.filter((item) => item === fishString).length)
        }
    }

    const labelArray = [...new Set(originalArray)]

    const backgroundcolor = ["#f8b020", "#6cb9c8", "#e78e82", "#2ea26e", "#6375fb", "#2e2179", "#fdcce5", "#ffee65", "#8bd3c7", "#9080ff"]

    const data = {
        labels: labelArray,
        datasets: [
            {
                label: 'Всего поймано',
                data: mappedArray,
                backgroundColor: backgroundcolor,
            },
        ],
    };

    ChartJS.defaults.plugins.tooltip.backgroundColor = '#fff'
    ChartJS.defaults.plugins.tooltip.bodyColor = '#000'
    ChartJS.defaults.plugins.tooltip.titleColor = '#000'
    ChartJS.defaults.plugins.tooltip.cornerRadius = 4
    ChartJS.defaults.plugins.tooltip.boxWidth = 20
    ChartJS.defaults.plugins.tooltip.boxHeight = 20
    ChartJS.defaults.plugins.tooltip.borderWidth = 2
    ChartJS.defaults.plugins.tooltip.borderColor = '#F6F6F6'

    ChartJS.defaults.plugins.tooltip.bodyFont = {
        family: 'Montserrat',
        size: 14
    }
    ChartJS.defaults.plugins.tooltip.titleFont = {
        family: 'Montserrat',
        size: 15
    }

    return (
        <div>
            <Pie data={data} width={'200px'} height={'200px'} />
        </div>
    );
});

export default PieChart;