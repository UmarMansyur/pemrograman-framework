const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const createTransaction = async (req, res, next) => {
  try {
    const { customerId, detailPurchase } = req.body;

    if(detailPurchase.length === 0) {
      return res.status(400).json({
        status: false,
        message: 'Detail pembelian tidak mengandung array',
      })
    }
    let totalPurchase = await getTotalPurchase(detailPurchase);
    const response = await prisma.$transaction(async (tx) => {
      const result = await tx.transaction.create({
        data: {
          customerId,
          totalPurchase: totalPurchase,
          detailPurchase: {
            createMany: {
              data: detailPurchase
            }
          }
        }
      });

      await Promise.all(
        detailPurchase.map(async(data) => {
          const stock = await searchProduct(data.productId);
    
          await tx.product.update({
            where: {
              id: data.productId,
            },
            data: {
              stock: stock.stock - 1
            }
          })
        })
      );
      return result;
    })


    return res.status(201).json({
      status: true,
      message: 'Data transaksi berhasil dibuat',
      data: response
    })
  } catch (error) {
    next(error)
  }
}


async function searchProduct(id) {
  return await prisma.product.findFirst({
    where: {
      id: Number(id)
    }
  });
}

async function getTotalPurchase(detailPurchase) {
  let totalPurchase = 0;
  await Promise.all(
    detailPurchase.map(async (data) => {
     const productPrice = await searchProduct(data.productId);
     totalPurchase = totalPurchase + productPrice.price;
   }) 
  );

  return totalPurchase;

} 

module.exports = { createTransaction }