const {client}=require('./connection.js');
//Update Single Data
const updateSingleData=async()=>{
	try{
		const database=client.db('product');
		const collection=database.collection('list');
		//Find Data
		const founding={name:'t-shirt'};
		//Update Data
		const updateData={$set:{price:500}};
		const result=await collection.updateOne(founding,updateData);
		console.log('Data Update Successful',result);
	}catch(error){
		console.log(error);
	}finally{
		await client.close();
	}
}
//Function Calling
updateSingleData();