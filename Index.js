const options = [
    {
        name: '색상',
        values: ['적색', '청색','하얀']
    },
    {
        name: '사이즈',
        values: ['XX', 'XL']
    },
    {
        name: '아아',
        values: ['ㅋㅋ', 'ㄴㄴㄴ']
    },
];

const newOptions = [];

for (const option of options) {
    const tempArray = [];
    
    for (const value of option.values) {
        const temp = {};
        temp[option.name] = value;
        tempArray.push(temp)
            
    }
    newOptions.push(tempArray)
}

const optionLen = newOptions.length;

const finalOptions = [];
const join = (options, level, current) => {
    if(level === optionLen) {
        finalOptions.push(current);
        return;
    }

    for(const option of newOptions[level]) {
        const next = {
            ...current,
            ...option,
        }
        join(options, level+1, next);
    }
};

join(newOptions, 0, {});
console.log(finalOptions)