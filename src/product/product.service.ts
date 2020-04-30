import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { };

    async getProducts(): Promise<Product[]> {

        const products = await this.productModel.find();
        return products;

    };

    async getProduct(id: string): Promise<Product> {

        const product = await this.productModel.findById(id);
        if (!product) throw new NotFoundException(`Product Does not exists`);
        return product;

    };

    async createProduct(createProductDto: CreateProductDto): Promise<Product> {
        const product = await this.productModel.create(createProductDto);
        return product.save();

    };

    async updateProduct(id: string, createProductDto: CreateProductDto): Promise<Product> {
        const product = await this.productModel.findById(id);
        if (!product) throw new NotFoundException(`Product does not exists`);
        return await this.productModel.findByIdAndUpdate(id, createProductDto, { new: true });

    };

    async deleteProduct(id: string): Promise<Product> {
        const product = await this.productModel.findById(id);
        if (!product) throw new NotFoundException(`Product does not exists`);
        return await this.productModel.findByIdAndDelete(id);
    };
};
