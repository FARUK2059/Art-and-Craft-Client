import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const SubCetaDetails = () => {

    const { updateTitle } = useContext(AuthContext);

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle('Sub Art Detais | Craft Store');
    }, [updateTitle]);

    const subDetails = useLoaderData();
    console.log(subDetails);
    

    // const { sub_item_name } = useParams(subDetails);
    // console.log(sub_item_name);


    // const print = subDetails?.find((pint) => pint.sub_id === id)
    // console.log(print);

    return (
        <div>
            <p>This is Details</p>
        </div>
    );
};

export default SubCetaDetails;