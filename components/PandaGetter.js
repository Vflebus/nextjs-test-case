import Image from "next/image"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPanda, getPandaAction } from "../store/reducers/pandaReducer";

const PandaGetter = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPanda());
    }, [dispatch])

    const { loadingPanda, panda } = useSelector(({ panda }) => panda);
    console.log(loadingPanda);

    return (
        <div className="getter column-center">
            <h2>PANDA</h2>
            {/* {!loadingPanda && (
                <div className="getterInfos column-center" >
                    <Image src={panda.image} alt="Panda"/>
                    <p>{panda.fact}</p>
                </div>
            )} */}
        </div>
    )
}

export default PandaGetter;