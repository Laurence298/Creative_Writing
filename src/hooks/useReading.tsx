
export const fetchReading = async (id:any)  => {

    const res = await fetch(`http://localhost:3000/api/chapter/${id}`);
    if (!res.ok) throw new Error("Failed to fetch chapters");

    const data = await res.json();

    const cleanedData = {
        id: data.id || "",
        title: data.title || "",
        content: data.content || "",
        parent_book: {
            id: data.parent_book?.id || "",
            title: data.parent_book?.title || "",
            description: data.parent_book?.description || ""
        },
        createdAt: data.createdAt || "",
        updatedAt: data.updatedAt || ""
    };
    console.log("Fetched Reading:", cleanedData);

    return cleanedData;


};

