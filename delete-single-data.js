const {client}=require('./connection.js');
//Delete Data
const deleteSingleData=async()=>{
	try{
		const database=client.db('product');
		const collection=database.collection('list');
		const query={name:'shirt'};
		const result=await collection.deleteOne(query);
		console.log('Data Delete Successful',result);
		// if(result.deletedCount==1){
		// 	console.log('Successfully deleted one data.');
		// }else{
		// 	console.log('Data is no match which do you want to delete');
		// }
	}catch(error){
		console.log(error);
	}finally{
		await client.close();
	}
}
//Function Calling
deleteSingleData(); 