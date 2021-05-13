export const getPieOption = (data) => {
  const formatSize = (size: number) => {
    if (size < 1024) {
      return `${(size).toFixed(2)}B`
    } else if (size < 1024) {
      return `${(size / 1024).toFixed(2)}KB`
    } else {
      return `${(size / 1024 / 1024).toFixed(2)}MB`
    }
  }

  data = data.map((i) => {
    i.name += `${formatSize(i.value)}`;
    return i;
  });

  const option = {
    title: {
      text: '内存占用',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: '内存使用',
        type: 'pie',
        radius: ['30%', '60%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '15',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data,
      }
    ]
  }

  return option;
}