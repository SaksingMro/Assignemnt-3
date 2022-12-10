const {client}=require('./connection.js');
//Insert Multiple Data
const insertMultipleData=async()=>{
	try{
		const database=client.db('product');
		const collection=database.collection('list');
		const data=[
			{name:'t-shirt',color:'red',price:350,size:'m'},
			{name:'pants',color:'navyblue',price:600,size:'32'},
			{name:'jacket',color:'purple',price:1500,size:'L'}
		];
		const result=await collection.insertMany(data);
		console.log('Multiple Data Insert Successful',result);
	}catch(error){
		console.log(error);
	}finally{
		await client.close();
	}
}
//Function Calling
insertMultipleData()