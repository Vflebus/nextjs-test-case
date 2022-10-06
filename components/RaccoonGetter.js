import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchRaccoon } from "../store/reducers/raccoonReducer";

const RaccoonGetter = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRaccoon());
    }, [dispatch])

    const { loadingRaccoon, raccoon } = useSelector(({ raccoon }) => raccoon);
    console.log('loading raccoon ? ' + loadingRaccoon);
    console.log(raccoon);

    return (
        <div className="getter column-center">
            <h2>PANDA</h2>
            {!loadingRaccoon && (
                <div className="getterInfos column-center" >
                    {/*eslint-disable-next-line @next/next/no-img-element */}
                    <img src={raccoon.image} alt="Raccoon" layout="fill"/>
                    <p>{raccoon.fact}</p>
                </div>
            )}
        </div>
    )
}

export default RaccoonGetter;