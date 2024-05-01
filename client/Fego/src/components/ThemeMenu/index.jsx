import { useEffect } from "react";
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_THEMES, UPDATE_CURRENT_THEME } from '../../utils/helpers';
import { QUERY_THEMES } from '../../utils/queries';
import { idbPromise } from "../../utils/helpers";

function ThemeMenu() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const { themes } = state;

    const { loading, data: themeData } = useQuery(QUERY_THEMES);

    useEffect(() => {
        if (themeData) {
            dispatch({
                type: UPDATE_THEMES,
                themes: themeData.themes,
            });
            themeData.themes.forEach((theme) => {
                idbPromise('themes', 'put', theme);
            });
        } else if (!loading) {
            idbPromise('themes', 'get').then((themes) => {
                dispatch({
                    type: UPDATE_THEMES,
                    themes: themes,
                });
            });
        }
    }, [themeData, loading, dispatch]);
}