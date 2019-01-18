
export const updateMarkerList = ({markersList, id}) => {
  let newMarkersList;

  if(id === 'all') {
    const allIsCheckedStatus = markersList.find((item) => {
      if(item.id === id) {
        return item;
      }
    }).isChecked;

    newMarkersList = markersList.map((item) => {
      if(item.type === 'main' || item.type === 'all') {
        return {...item, isChecked: !allIsCheckedStatus};
      }
      return item;
    });
  } else {
    newMarkersList = markersList.map((item) => {
      if(item.id !== id) {
        return item;
      }
      return {...item, isChecked: !item.isChecked};
    });

    const isAllMainCheckboxChecked = newMarkersList.filter((item) => {
      if(item.type === 'main' && !item.isChecked) {
        return item;
      }
    });

    if(isAllMainCheckboxChecked.length === 0) {
      newMarkersList = newMarkersList.map((item) => {
        if(item.type === 'all') {
          return {...item, isChecked: true};
        }
        return item;
      });
    } else {
      newMarkersList = newMarkersList.map((item) => {
        if(item.type === 'all') {
          return {...item, isChecked: false};
        }
        return item;
      });
    }
  }

  return newMarkersList;
};
