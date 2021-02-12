export const MultipleSelectActions = (prevState, action) => {
    switch (action.type) {
        case 'createOptions': // handle create the first array of options
            let id = 0;
            //Create new array and add check property
            const newArray = action.data.map(option => {
                id++;
                return ({ id: id, option: option, check: false }
                )
            });
            return {
                ...prevState,
                initOptions: newArray,
                searchOptionResult: newArray
            }
        case 'handleChangeSearchValue': // handle filter country by search input
            // change letters to capital letter 
            const searchText = action.value.toUpperCase();
            // filter array by search input text
            let searchItems = [];

            if (searchText) {//if text not empty
                searchItems = [...prevState.searchOptionResult].filter(item => {
                    //return result fined
                    return item.option.toUpperCase().startsWith(searchText);
                });
            } else {
                //return all options
                searchItems = prevState.initOptions
            }
            return {
                ...prevState,
                searchOptionResult: searchItems,
                searchValue: action.value
            }
        case 'handleClickEvent':
            //handle change status to option when click
            return{
                ...prevState,
                searchOptionResult: prevState.searchOptionResult.map(item => {
                    if (item.id === action.id){
                       return {...item, check: !item.check}
                    }else{
                        return item
                    }
                }),
                initOptions: prevState.initOptions.map(item => {
                    if (item.id === action.id){
                       return {...item, check: !item.check}
                    }else{
                        return item
                    }
                })
            }
           
        default:
            return {
                prevState
            }

    }
}