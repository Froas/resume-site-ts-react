export interface BlockContextProps {
    value: BlockContextValue;
}

export interface BlockContextValue {
    header: string,
    description?: string,
    secondHeader?: string ;
    listItems?: Array<{task: string}>;
    projectItem?: Array<any>; 
}

const BlockContext = (props: BlockContextValue) => {
    return (
    <div className="mb-1">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {props.header}
        </h1>
        <hr className="my-4 border-gray-300 dark:border-gray-600" />
        <div>
            <p className="text-gray-700 dark:text-gray-300">
            {props.description}
            </p>
        </div>
        <div className="3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {props.secondHeader}
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            { 
                props.listItems ?
                props.listItems.map((item, index) => (
                    <li key={index}>{item.task}</li>
                )) 
                : ""
            }
            </ul>
        </div>
        <div>
        { 
            props.projectItem ?
            props.projectItem.map((item, index) => (<>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {item.title}
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li key={index}>{item.description}</li>
                </ul>
                </>
            )) 
            : ""
            }
        </div>
        
        </div>
    </div>
    );
}

export default BlockContext;