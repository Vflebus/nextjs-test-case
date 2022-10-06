import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPanda } from "../store/reducers/pandaReducer";

const PandaGetter = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPanda());
    }, [dispatch])

    const { loadingPanda, panda } = useSelector(({ panda }) => panda);
    console.log('loading panda ? ' + loadingPanda);
    console.log(panda);

    return (
        <div className="getter column-center">
            <h2>PANDA</h2>
            {!loadingPanda && (
                <div className="getterInfos column-center" >
                    {/*eslint-disable-next-line @next/next/no-img-element */}
                    <img src={panda.image} alt="Panda" layout="fill"/>
                    <p>{panda.fact}</p>
                </div>
            )}
        </div>
    )
}

export default PandaGetter;