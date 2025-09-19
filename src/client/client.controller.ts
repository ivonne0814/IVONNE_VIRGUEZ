import { Controller, Post} from '@nestjs/common';

@Controller('client')
export class ClientController {
    // pedir cafe
    @Post()
    askForCoffee() {
        return 'se solicita un cafe';
    }
}
