import { Controller, Get, Post, Res, Body, Param, Delete, HttpStatus, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { CreateProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { };

    @Get()
    async getProducts(@Res() res: Response) {
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({ ok: true, products });
    };

    @Get('/:id')
    async getProduct(
        @Param('id') id: string,
        @Res() res: Response) {
        const product = await this.productService.getProduct(id);
        return res.status(HttpStatus.OK).json({ ok: true, product });
    };

    @Post('/create')
    @UsePipes(ValidationPipe)
    async createProduct(
        @Body() createProductDto: CreateProductDto,
        @Res() res: Response
    ) {
        const product = await this.productService.createProduct(createProductDto);
        return res.status(HttpStatus.OK).json({ ok: true, message: 'Product Successfully created', product });
    };

    @Put('/:id')
    async updateProduct(
        @Param('id') id: string,
        @Body() createProductDto: CreateProductDto,
        @Res() res: Response) {
        const product = await this.productService.updateProduct(id, createProductDto);
        return res.status(HttpStatus.OK).json({ ok: true, message: 'Product Successfully updated', product });
    };

    @Delete('/:id')
    async deleteProduct(
        @Param('id') id: string,
        @Res() res: Response) {
        const product = await this.productService.deleteProduct(id);
        return res.status(HttpStatus.OK).json({ ok: true, message: 'Product Successfully Deleted', product });
    };
}; 
