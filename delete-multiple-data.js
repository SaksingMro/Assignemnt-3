const {client}=require('./connection.js');
//Delete Data
const deleteMultipleData=async()=>{
	try{
		const database=client.db('product');
		const collection=database.collection('list');
		const query={};
		const result=await collection.deleteMany(query);
		console.log('All Data is Successfully Deleted!',result);
	}catch(error){
		console.log(error);
	}finally{
		await client.close();
	}
}
//Function Calling
deleteMultipleData();