import React , {useState , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { callApi } from '../../api/callApi';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
  
const renderCategories = (categories: any) => {
    return categories.map((c: any) => {
    return <MenuItem value={c.routerName} key={c.id}>{c.name}</MenuItem>
    })
}

const SelectCategory : React.FC = (props: any) => {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);
    const [category , setCategory] = useState('');

    const handleChange = (event: any) => {
        setCategory(event.target.value);
        props.callBackCategory(event.target.value);
    };

    useEffect(() => {
        callApi.GET_Categories(props.type)
        .then(res => {
            setCategories(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    } , []);

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
                Category
            </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                onChange={handleChange}
            >
            {renderCategories(categories)}
            </Select>
        </FormControl>
    )
}

export default SelectCategory;