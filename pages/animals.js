import PandaGetter from "../components/PandaGetter"
import RaccoonGetter from "../components/RaccoonGetter"

const Animals = () => {

    return (
        <main className="column-center">
            <h1>Http requests test</h1>
            <div className="apiGetters">
                <PandaGetter />
                <RaccoonGetter />
            </div>
        </main>
    )
}

export default Animals