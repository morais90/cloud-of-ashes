import GridController from '../../src/components/grid/controller.js';
import {SKY, AIRPORT, CLOUD, CLOUD_IN_AIRPORT} from '../../src/components/grid/grid.jsx';


describe('Controller', () => {
    it('should push to grid', () => {
        let controller = new GridController();
        controller.push([SKY, AIRPORT, CLOUD]);

        expect(controller.grid).toEqual([[SKY, AIRPORT, CLOUD]])
    });
    it('should update grid', () => {
        let controller = new GridController();
        controller.push([SKY, CLOUD, AIRPORT]);
        controller.update(0, 0, CLOUD);

        expect(controller.grid).toEqual([[CLOUD, CLOUD, AIRPORT]])
    });
    it('should clear grid', () => {
        let controller = new GridController();
        controller.push([SKY, CLOUD, AIRPORT]);
        controller.clear();

        expect(controller.grid).toEqual([])
    });
    it('should have airport in grid', () => {
        let controller = new GridController();
        controller.push([SKY, CLOUD, AIRPORT]);

        expect(controller.hasAirport(controller.grid[0])).toEqual(true)
    });
    it('should not have airport in grid', () => {
        let controller = new GridController();
        controller.push([SKY, CLOUD, CLOUD]);

        expect(controller.hasAirport(controller.grid[0])).toEqual(false)
    });
    it('should have cloud in airport in grid', () => {
        let controller = new GridController();
        controller.push([SKY, CLOUD, CLOUD_IN_AIRPORT]);

        expect(controller.hasCloudInAirport(controller.grid[0])).toEqual(true)
    });
    it('should not have cloud in airport in grid', () => {
        let controller = new GridController();
        controller.push([SKY, CLOUD, CLOUD]);

        expect(controller.hasCloudInAirport(controller.grid[0])).toEqual(false)
    });
    it('should have cloud in grid', () => {
        let controller = new GridController();
        controller.push([SKY, CLOUD, CLOUD_IN_AIRPORT]);

        expect(controller.hasCloud(controller.grid[0])).toEqual(true)
    });
    it('should not have cloud in grid', () => {
        let controller = new GridController();
        controller.push([SKY, SKY, SKY]);

        expect(controller.hasCloud(controller.grid[0])).toEqual(false)
    });
    it('should return top cell', () => {
        let controller = new GridController();
        controller.grid = [
            [SKY, SKY, SKY],
            [SKY, SKY, SKY],
            [SKY, SKY, SKY]
        ];

        expect(controller.getTopCell(1, 0, controller.grid)).toEqual([0, 0, SKY])
    });
    it('should not return top cell', () => {
        let controller = new GridController();
        controller.grid = [
            [SKY, SKY, SKY],
            [SKY, SKY, SKY],
            [SKY, SKY, SKY]
        ];

        expect(controller.getTopCell(0, 0, controller.grid)).toEqual(undefined)
    });
    it('should return bottom cell', () => {
        let controller = new GridController();
        controller.grid = [
            [SKY, SKY, SKY],
            [SKY, SKY, SKY],
            [SKY, SKY, SKY]
        ];

        expect(controller.getBottomCell(1, 0, controller.grid)).toEqual([2, 0, SKY])
    });
    it('should not return bottom cell', () => {
        let controller = new GridController();
        controller.grid = [
            [SKY, SKY, SKY],
            [SKY, SKY, SKY],
            [SKY, SKY, SKY]
        ];

        expect(controller.getBottomCell(2, 2, controller.grid)).toEqual(undefined)
    });
    it('should return right cell', () => {
        let controller = new GridController();
        controller.grid = [
            [SKY, SKY, SKY],
            [SKY, SKY, SKY],
            [SKY, SKY, SKY]
        ];

        expect(controller.getRightCell(1, 0, controller.grid)).toEqual([1, 1, SKY])
    });
    it('should not return right cell', () => {
        let controller = new GridController();
        controller.grid = [
            [SKY, SKY, SKY],
            [SKY, SKY, SKY],
            [SKY, SKY, SKY]
        ];

        expect(controller.getRightCell(1, 2, controller.grid)).toEqual(undefined)
    });
    it('should return left cell', () => {
        let controller = new GridController();
        controller.grid = [
            [SKY, SKY, SKY],
            [SKY, SKY, SKY],
            [SKY, SKY, SKY]
        ];

        expect(controller.getLeftCell(1, 1, controller.grid)).toEqual([1, 0, SKY])
    });
    it('should not return left cell', () => {
        let controller = new GridController();
        controller.grid = [
            [SKY, SKY, SKY],
            [SKY, SKY, SKY],
            [SKY, SKY, SKY]
        ];

        expect(controller.getLeftCell(1, 0, controller.grid)).toEqual(undefined)
    });
    it('should return next day', () => {
        let controller = new GridController();
        controller.grid = [
            [CLOUD, SKY, SKY],
            [SKY, SKY, SKY],
            [SKY, SKY, AIRPORT]
        ];
        let next_day = controller.nextDay(controller.grid);

        expect(next_day).toEqual(true);
        expect(controller.grid).toEqual([
            [CLOUD, CLOUD, SKY],
            [CLOUD, SKY, SKY],
            [SKY, SKY, AIRPORT]
        ])
    });
    it('should not return next day', () => {
        let controller = new GridController();
        controller.grid = [
            [SKY, CLOUD, SKY],
            [SKY, CLOUD, CLOUD],
            [SKY, CLOUD, CLOUD_IN_AIRPORT]
        ];
        let next_day = controller.nextDay(controller.grid);

        expect(next_day).toEqual(false);
        expect(controller.grid).toEqual([
            [SKY, CLOUD, SKY],
            [SKY, CLOUD, CLOUD],
            [SKY, CLOUD, CLOUD_IN_AIRPORT]
        ])
    });
    it('should valid grid', () => {
        let controller = new GridController();
        controller.grid = [
            [SKY, CLOUD, SKY],
            [SKY, SKY, SKY],
            [SKY, SKY, AIRPORT]
        ];

        expect(controller.gridIsValid(controller.grid)).toEqual(true);
    });
    it('should not valid grid', () => {
        let controller = new GridController();
        controller.grid = [
            [SKY, CLOUD, SKY],
            [SKY, SKY, SKY],
            [SKY, SKY, SKY]
        ];

        expect(controller.gridIsValid(controller.grid)).toEqual('Clique no Céu Aberto para criar alguns aeroportos.');
    });
    it('should not valid grid 1', () => {
        let controller = new GridController();
        controller.grid = [
            [SKY, AIRPORT, SKY],
            [SKY, SKY, SKY],
            [SKY, SKY, SKY]
        ];

        expect(controller.gridIsValid(controller.grid)).toEqual('Está um ótimo dia! Não temos nenhuma nuvem.');
    });
    it('should not valid grid 2', () => {
        let controller = new GridController();
        controller.grid = [
            [SKY, AIRPORT, SKY],
            [SKY, SKY, SKY],
            [SKY, SKY, SKY]
        ];

        expect(controller.gridIsValid(controller.grid)).toEqual('Está um ótimo dia! Não temos nenhuma nuvem.');
    });
    it('should not valid grid 3', () => {
        let controller = new GridController();
        controller.grid = [
            [SKY, SKY, SKY],
            [SKY, SKY, SKY],
            [SKY, SKY, SKY]
        ];

        expect(controller.gridIsValid(controller.grid)).toEqual(
            'Seu dia está ensolarado, clique em cima do Céu Aberto para determinar aonde estão os aeroportos e as nuvens.'
        );
    });
    it('should not valid grid 4', () => {
        let controller = new GridController();
        controller.grid = [
            [SKY, SKY, SKY],
            [SKY, SKY, CLOUD_IN_AIRPORT],
            [SKY, SKY, CLOUD]
        ];

        expect(controller.gridIsValid(controller.grid)).toEqual('Epa, parece que os aeroportos foram encobertos pelas nuvens.');
    });
    it('should process same day', () => {
        let controller = new GridController();
        controller.grid = [
            [SKY, SKY, SKY],
            [AIRPORT, SKY, CLOUD],
            [AIRPORT, SKY, CLOUD]
        ];

        expect(controller.process()).toEqual('Opa! Consegui descobrir que todos os aeroportos serão cobertos no 3º dia.');
    });
    it('should process first and last day', () => {
        let controller = new GridController();
        controller.grid = [
            [AIRPORT, SKY, SKY, SKY],
            [SKY, SKY, SKY, SKY],
            [SKY, AIRPORT, SKY, SKY],
            [SKY, SKY, CLOUD, SKY]
        ];

        expect(controller.process()).toEqual(
            'Opa! Consegui descobrir que o primeiro aeroporto sera coberto no 3º dia e o restante no 6º dia.'
        );
    });
});
