const {client}=require('./connection.js');
//Insert Signle Data
const createData=async()=>{
	try{
		const database=client.db('product');
		const collection=database.collection('list');
		const data={
			name:'shirt',
			color:'black',
			price:500,
			size:'xl',
		}
		const result=await collection.insertOne(data);
		console.log('Data Insert Successful',result);
	}catch(error){
		console.log(error)
	}finally{
		await client.close();
	}
}
//Function Calling
createData()