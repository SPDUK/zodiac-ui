import { async, TestBed } from "@angular/core/testing"
import { StoreModule } from "./store.module"

describe("StoreModule", () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule],
        }).compileComponents()
    }))

    it("should create", () => {
        expect(StoreModule).toBeDefined()
    })
})
