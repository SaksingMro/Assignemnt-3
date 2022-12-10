const {client}=require('./connection.js');
//Update Single Data
const updateMultipleData=async()=>{
	try{
		const database=client.db('product');
		const collection=database.collection('list');
		const finding={};
		const updateData={$set:{color:'white',price:600}};
		const result=await collection.updateMany(finding,updateData);
		console.log('Data Update Successful',result);
	}catch(error){
		console.log(error);
	}finally{
		await client.close();
	}
}
//Function Calling
updateMultipleData();